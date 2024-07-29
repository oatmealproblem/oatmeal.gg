import eleventyPluginBundle from "@11ty/eleventy-plugin-bundle";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

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
			title: "MichaelMakesGames",
			subtitle:
				"A blog where I post about game dev, web tech, or whatever else I'm up to.",
			base: "https://michaelmakes.games",
			author: {
				name: "Michael Moore",
				email: "", // Optional
			},
		},
	});

	eleventyConfig.addPlugin(eleventyPluginBundle);

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
