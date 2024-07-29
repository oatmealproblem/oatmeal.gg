import { hfs } from "@humanfs/node";
import matter from "gray-matter";

const template = `---
title: "#$TAG$ Posts"
layout: layouts/base
pagination:
	data: collections.$TAG$
	size: 10
	alias: posts
	reverse: true
---

<hgroup>
	<h1>{{ title }}</h1>
	<p>
		{{ posts.at(-1).data.date | shortDate }} to
		{{ posts[0].data.date | shortDate }}
	</p>
</hgroup>

{% include "posts-list.njk" %}
`;

async function main() {
	const tags = new Set();
	for await (const entry of hfs.walk("./content/blog")) {
		if (entry.isFile && entry.name.endsWith(".md")) {
			const text = await hfs.text(`./content/blog/${entry.path}`);
			const { data } = matter(text);
			if (typeof data?.tags === "string") {
				tags.add(data.tags);
			} else if (Array.isArray(data?.tags)) {
				for (const tag of data.tags) {
					tags.add(tag);
				}
			}
		}
	}
	tags.delete("posts");
	for (const tag of tags) {
		const path = `./content/tags/${tag}.njk`;
		console.log(`Writing to ${path}`);

		// TODO template literal
		await hfs.write(path, template.replace(/\$TAG\$/g, tag));
	}

	for await (const entry of hfs.walk("./content/tags")) {
		const base = entry.name.split(".")[0];
		if (!tags.has(base)) {
			const path = `./content/tags/${entry.path}`;
			console.log(`Deleting ${path}`);
			await hfs.delete(path);
		}
	}
}

main();
