---
title: 技术组通用文档
---
# 技术组通用文档

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
