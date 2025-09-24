# Contribution Guidelines

<PageHeader />

Zumasys writes all product documentation in [Markdown](https://www.markdownguide.org/). You can find a template [for download here](/assets/downloads/README.txt) or described below:

````markdown
# Put Your Title Here

<PageHeader />

General description goes here. You can also include a badge tag like so:

**Tags:**
<badge text='encryption' vertical='middle' />

Other notes:

- There should only be one `#` section in an article. 
- Leave the `<PageHeader/>` and `<PageFooter/>` tags where they are. 
- This file should be left as `README.md` and you should place it inside a folder that represents the article name. 
- Any images that you want to include inline should be placed in that folder too.

```
* article-name (this is the folder)
  * image1.png (an image for the article)
  * image3.png (another image for the article)
  * README.md (this file/the article you just made)
```

If your article needs to reference a file for download like a `.docx` or a `.pdf`, please place it into the `site/.vuepress/public/assets/downloads` directory and link to it like so:

`[link-text](/assets/downloads/file-to-download.pdf)`

## Descriptive Sub Section

More information here. You can have as many `##` sections as you'd like.

### Sub Sub Section

- You can nest `##`-`######` for up to six levels of sub-sections.
- You can _italicize_ by wrapping text like `_italicize_` or `*italicize*`
- You can __bold__ by wrapping text like `__bold__` or `**bold**`
- For more commands a great cheat sheet on Markdown can be found at [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
- It is highly recommended and encouraged that you use VS Code and:
  - [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
  - [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

<PageFooter />

````

## How to Write Documentation

- Do not use line numbers is example code, as the code blocks will automatically be numbered in Markdown.
- Use `backticks (``)` to format variable names (single backtick) and code blocks (triple backtick).
- Highlight keywords, i.e. **string**, **key** and **method** in this case.
- Where possible, make sure that there is a link back to the page on level up.
- Remove extraneous and trailing blanks, except where relevant, i.e. two spaces at the end of a line to cause a line-break.
- Use a Markdown linter if editing in VS Code (Markdown All In One is great!)
  - This extension also makes it easy to add a table of contents (it introduces a command to VS Code to generate one based on your article headers)
  - Use `<!-- omit from toc -->` in the header to keep it out of the generated ToC
- With code examples, space out the code so that people can see what is going on, i.e.:

``` mvbasic
IF chr >= 32 AND chr < 128 THEN CRT CHAR(chr) "#2" : ELSE CRT " " :
```

- Write URLs as links with Markdown syntax.
  - Good: `[link text](./path/to/README.md)`
  - Bad: `[ link text ](./path/to/README.md)`
  - Good: `([link text])(./path/to/README.md)`
  - Bad: `( [ link text ] )(./path/to/README.md)`
  - Good: `[link text](https://external.url/path/to/thing)`
  - Bad: `https://external.url/path/to/thing`

## How Not to Write Documentation

1. NO SHOUTING. We are trying to present a modern look and should be encouraging users to move away from everything in capital letters.
2. Avoid using HTML except where necessary.
   a. Most tables can be constructed using Markdown syntax so try that first before opting for HTML tables.
   b. It is permissible to embed video content with HTML.

<PageFooter />
