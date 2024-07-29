export default {
	plugins: ["prettier-plugin-jinja-template"],
	useTabs: true,
	overrides: [
		{
			files: ["*.njk"],
			options: {
				parser: "jinja-template",
			},
		},
	],
};
