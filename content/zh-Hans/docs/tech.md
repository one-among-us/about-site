---
title: 技术组通用文档
---
# 技术组通用文档

## 添加活动

活动卡片的文件放在 `content/<语言>/events/` 下。文件名以下划线（`_`）开头，以 `.md` 结尾，中间可以是任意的，但推荐选取一个和活动标题有关系的文件名。每个文件的格式如下，其中 `---` 之间的内容称作 **frontmatter**，之后的内容称作**正文**。

```markdown
---
title: '活动标题'
time: '带时区的 ISO-8601 时间，比如 2024-12-20T23:59:59+00:00'
# 如果没有链接，则删掉本段
link:
  type: '链接文字'
  url: '链接目标'
# 非链接的标签的内容，可以有多个
community:
  - '标签文字'
  - '标签文字'
# 如果没有地址，则删掉本段
location: '地址'
image: '海报图片的文件名，具体见下'
---

海报内容的文字形式
```

海报的图片都放在 `content/public/assets/events` 这个目录下。比如如果你把图片放在 `content/public/assets/events/xxx.png`，则你在上面 `image` 一栏填入 `xxx.png`。

为了照顾看图不方便的人士，请把图里**所有的**文字内容忠实地写下来，勿要遗漏。如果图中有二维码或别的机读图形，请在正文里将其所表达的内容（如链接）写出来。例如，假设一个图里有二维码，它扫出来是一个指向 `https://example.com/abcdef` 的链接，图上有「请扫码报名」的字样，则你在正文里写：`请[扫码报名](https://example.com/abcdef)`。再例如，假设一个图里有一个同样的二维码，但图上没有文字像前例一样适合作为链接文本，则你在正文的最末尾额外添加一个段落，写：`[报名链接](https://example.com/abcdef)`。

frontmatter 里的 `title` 和 `community` 项以及正文均可使用 HTML。为了良好的阅读体验，我们尤其建议关注以下两种情况：
- 当你要使用缩写时，使用 `<abbr>` 标签，其格式为 `<abbr title="全称">缩写</abbr>`，比如 `<abbr title="One Among Us">OAU</abbr>`。
- 当你想使用全大写形式的书写一个不是缩写的东西时候，首先考虑是否必要。如果不必要，则使用非全大写的形式。如果必要（比如「图里就是全大写」），使用 `<span class="allCaps">普通的大小写格式</span>`，比如 `<span class="allCaps">One Among Us</span>`。这样会显示成全大写的格式，但复制出来会是普通的大小写格式。

在创建活动文件的时候，请考虑你的海报的语言。
- 如果不同语言有不同的图片版本，则对每个语言分别创建对应的 `md` 文件，将图片内容分别填入对应语言的 Markdown 正文。
- 如果只有一张图片，则只在一种语言的 Markdown 正文里写入文字内容，而在别的语言的文件里使用特殊标记 <code>&lt;!--@include: @/另外的文件名 --&gt;</code> 进行引用，文件名是以 `content` 目录为基准的。比如在 `content/en/events/_2024-tdor-broadcast-event-1.md` 里，这个活动对应的另一种语言的文件名是 `content/zh-Hans/events/_2024-跨性别纪念日晚会-1.md`，则你在正文里填入 <code>&lt;!--@include: @/zh-Hans/events/_2024-跨性别纪念日晚会-1.md --&gt;</code>。
- 为了方便，如果图里有一种主体语言，则选择它作为源文件的目录，否则随机选择一种语言。
- 每个语言的 Markdown 文件的 frontmatter 用对应的语言书写。

## Commit Messages 的写法

自 2023 年 2 月 20 日起，One Among Us 所有代码仓库的 commit messages 均采用以下格式：

> [*] Do something

整条 message 以英文写作。以方括号内的标记符开头，方括号后加一个空格，再以大写 **动词** 起始描述基本的更改点，句末不加标点符号。如果有在一行之内写不下或认为不必写在标题的内容，请在之后以更加具体的 commit message 作为补充。每行不超过 72 英文字符。

**标记符**

> [+] 添加
>
> [-] 移除
>
> [U] 更新 (Update) 修改 (Modify)
>
> [O] 优化 (Optimization)
>
> [F] 修复 (Fix)
>
> [S] 样式 (Style)
>
> [M] 移动 (Move) [^1]
>
> [R] 重构（Refactor）
>
> [T] 测试 (Test)
>
> [D] 文档 (Documentation)
>
> [B] 备份（Backup）
>
> [PR] Merge commit of pull request

[^1]: 习惯上也可能用 [M] 表示修改（Modify），但此时更推荐用 [U]。

**例子**

> [+] Add entry for sauricat

添加 sauricat 的条目。

> [U] Update photos for sauricat

更新 sauricat 的照片。

> [F] Fix punctuation

修改标点符号。

*Under Construction...*
