---
title: "VSCode-style Colored Brackets for Shiki"
date: "2025-01-26"
description: "Complete set up for an Eleventy blog"
tags:
  - webdev
  - eleventy
  - shiki
  - meta
---

[Shiki](https://shiki.style) is a popular syntax highlighter, powered by the same engine as VSCode. However, colored brackets are not part of the main syntax highlighting engine, so they were missing from Shiki. A few months, I worked on a plugin for this, which is now officially part of Shiki via `@shikijs/colorized-brackets`. I'll walk through the setup to use that in an Eleventy blog.

## Dependencies

First off, we'll need to install some dependencies:

```sh
npm i -D @shikijs/colorized-brackets unified remark-parse remark-rehype rehype-stringify rehype-expressive-code
```

- `@shikijs/colorized-brackets`: Shiki plugin for colored brackets
- `unified`: an ecosystem for parsing and transforming content
- `remark-parse`: unified plugin to parse markdown
- `remark-rehype`: unified plugin to turn markdown into html
- `rehype-stringify`: unified plugin to turn html into string
- `rehype-expressive-code`: unified plugin for [Expressive Code](https://expressive-code.com), a wrapper around Shiki with extra features


## Config

To start, we need to import those dependencies we just installed, in our `eleventy.config.js` file:

```js title="eleventy.config.js"
import { transformerColorizedBrackets } from "@shikijs/colorized-brackets";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeExpressiveCode from "rehype-expressive-code";
```

and then set configure eleventy to use `unified`/`remark`/`rehype` for markdown files:

```js title="eleventy.config.js"
	eleventyConfig.setLibrary("md", {
		render: async (content, pageContext) => {
			return await unified()
				.use(remarkParse) // parse markdown
				.use(remarkRehype) // convert markdown AST to html AST
				.use(rehypeExpressiveCode, { // perform syntax highlighting on code blocks
					themes: ["dark-plus"], // syntax highlighting theme, see https://expressive-code.com/guides/themes/ for more
					shiki: { transformers: [transformerColorizedBrackets()] }, // this enables colored brackets for Shiki
				})
				.use(rehypeStringify) // convert html AST to string
				.data({
					pageContext,
					eleventyConfig,
				})
				.process(content);
		},
	});
```

With some additional Expressive Code configuration to better match my [Pico CSS](https://picocss.com/) theme, here's my complete config for syntax highlighting:

```js title="eleventy.config.js"
// other imports...
import { transformerColorizedBrackets } from "@shikijs/colorized-brackets";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeExpressiveCode from "rehype-expressive-code";

export default function (eleventyConfig) {
  // other config...

	const codeBackground = `var(--pico-code-background-color)`;
	const codeBackgroundLighter = "var(--pico-background-color)";
	const codeBorder = "var(--pico-blockquote-border-color)";
	eleventyConfig.setLibrary("md", {
		render: async (content, pageContext) => {
			return await unified()
				.use(remarkParse)
				.use(remarkRehype)
				.use(rehypeExpressiveCode, {
					themes: ["dark-plus"],
					styleOverrides: {
						codeBackground: codeBackground,
						borderColor: codeBorder,
						frames: {
							editorActiveTabBackground: codeBackground,
							editorTabBarBackground: codeBackgroundLighter,
							terminalBackground: codeBackground,
							terminalTitlebarBackground: codeBackgroundLighter,
						},
					},
					shiki: { transformers: [transformerColorizedBrackets()] },
				})
				.use(rehypeStringify)
				.data({
					pageContext,
					eleventyConfig,
				})
				.process(content);
		},
	});
}
```

PS: all the code blocks in this article are highlighted with the above config. You can really see the colored brackets in the last couple 🌈