import eleventyPluginBundle from "@11ty/eleventy-plugin-bundle";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { transformerColorizedBrackets } from "@shikijs/colorized-brackets";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeExpressiveCode from "rehype-expressive-code";

export default function (eleventyConfig) {
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		extensions: "html",
		widths: [920],
		formats: ["webp"],
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		},
		sharpOptions: {
			animated: true,
			limitInputPixels: false,
		},
		sharpWebpOptions: {
			nearLossless: true,
		},
	});

	eleventyConfig.addPlugin(feedPlugin, {
		type: "rss", // or "rss", "json"
		outputPath: "/rss.xml",
		collection: {
			name: "posts",
			limit: 0,
		},
		metadata: {
			language: "en",
			title: "Oatmeal Problem",
			subtitle:
				"A blog where I post about game dev, web tech, or whatever else I'm up to.",
			base: "https://oatmealproblem.solutions",
			author: {
				name: "Michael Moore",
				email: "", // Optional
			},
		},
	});

	eleventyConfig.addPlugin(eleventyPluginBundle);

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

	eleventyConfig.addFilter("head", (array, n) => {
		if (!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if (n < 0) {
			return array.slice(n);
		}
		return array.slice(0, n);
	});

	eleventyConfig.addFilter("readerTags", (array) => {
		if (!Array.isArray(array) || array.length === 0) {
			return [];
		} else {
			return array.filter((item) => item !== "posts");
		}
	});

	eleventyConfig.addFilter("shortDate", (date) => {
		const [year, month, day] = date.split("-").map((s) => parseInt(s));
		return Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		}).format(new Date(year, month - 1, day));
	});

	return {
		dir: {
			input: "content",
			includes: "../_includes", // relative to input
		},
	};
}
