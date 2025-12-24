---
title: Tech Generic Docs
---
# Tech Generic Docs

## Adding an event

Files for event cards are under `content/<language>/events/`. Filenames start with underscore (`_`) and ends with `.md`. You can put whatever you want in the middle, but it is recommended to choose a filename related to the title of the event. The format of each file is as below, where content between the two `---`s is called the **frontmatter** and content after it is called the **main content**.

```markdown
---
title: 'event title'
time: 'ISO-8601 time with time zone, for example 2024-12-20T23:59:59+00:00'
# If there is no link, delete this section
link:
  type: 'link text'
  url: 'link target'
# Content for non-link tags, can be more than one
community:
  - 'tag text'
  - 'tag text'
# If there is no location, delete this section
location: 'location'
image: 'poster image filename, see below for details'
---

Poster content in text format
```

Poster images are under the directory of `content/public/assets/events`. For example, if you put the image in `content/public/assets/events/xxx.png`, you write `xxx.png` in the `image` section above.

To accomodate people for whom reading images is inconvenient, please write down **all** text content in the image as-is, and do not miss anything. If there are QR codes or other machine-readable graphs, please write out the content it represents (e.g. links) in the main content. For example, if there is a QR code in the image which is a link pointing to `https://example.com/abcdef` after decoding, and there is text "please scan QR code to register" in the image, then you write in the main content: `please [scan QR code to register](https://example.com/abcdef)`. For another example, if there is a QR code same as the one mentioned above, but there is no text in the image suitable to be a link text, then you add an extra paragraph at the end of the main content and write: `[registration link](https://example.com/abcdef)`.

You can use HTML in the `title` and `community` items in the frontmatter and also in the main content. For best reading experience, it is especially recommended to care about the following two cases:
- When you need to use an abbreviation, use the `<abbr>` tag, whose format is `<abbr title="full name">abbreviation</abbr>`, for example `<abbr title="One Among Us">OAU</abbr>`.
- When you want to use <span class="allCaps">all-caps</span> to write something that is not an abbreviation, first consider whether it is really necessary. If not, use a format that is not all-caps. If necessary (for example, "it is all caps in the image"), use `<span class="allCaps">Normal case format</span>`, for example `<span class="allCaps">One Among Us</span>`. This way it will be displayed in all-caps but it will remain normal case format if copied.

When creating the event file, please consider the text of your poster.
- If there is a different image version of each language, create a `md` file for each language and write the content of the images into the Markdown main content for the corresponding language.
- If there is only one image, then write the text content into the Markdown main content for only one language. In the files for other languages, use the special marker <code>&lt;!--@include: @/other-filename --&gt;</code> to reference it. The filename is based in the `content` directory. For example, for `content/en/events/_2024-tdor-broadcast-event-1.md`, the corresponding filename for the other language is `content/zh-Hans/events/_2024-跨性别纪念日晚会-1.md`. Thus, you write <code>&lt;!--@include: @/zh-Hans/events/_2024-跨性别纪念日晚会-1.md --&gt;</code> in the main content.
- For simplicity, if there is a main language in the image, choose it as the directory for the source file. Otherwise, choose a language randomly.
- Write the frontmatter for the Markdown files for each language in the corresponding language.

## Write Commit Messages

Effective Feb 20, 2023, we adopt the commit message convention as follows for all One Among Us repositories:

> [*] Do something

The message should be written in English. Starting with a mark symbol in square brackets and separated by a space character, the headline should be a imperative sentence describing what you do and end without punctuation marks. Detailed descriptions are not mandatory but recommended if you find it complicated. We follow the 72-column line-wrapping rule.

**Marks**
> [+] Add
>
> [-] Remove
>
> [U] Update
>
> [O] Optimize
>
> [F] Fix
>
> [S] Modify style
>
> [M] Move (also [M] Modify by convention but [U] Modify is recommended)
>
> [R] Refactor
>
> [T] Test
>
> [D] Tweak documentation
>
> [B] Backup
>
> [PR] Merge commit of pull request

**Examples**

> [+] Add entry for sauricat
>
> [U] Update photos for sauricat
>
> [F] Fix punctuation

*Under Construction...*
