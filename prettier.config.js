module.exports = {
	// https://prettier.io/docs/en/options.html#print-width
	printWidth: 80,

	// https://prettier.io/docs/en/options.html#tabs
	useTabs: true,

	// https://prettier.io/docs/en/options.html#semicolons
	semi: true,

	// https://prettier.io/docs/en/options.html#quotes
	singleQuote: false,

	// https://prettier.io/docs/en/options.html#trailing-commas
	trailingComma: "es5",

	// https://prettier.io/docs/en/options.html#bracket-spacing
	bracketSpacing: true,

	// https://prettier.io/docs/en/options.html#arrow-function-parentheses
	arrowParens: "always",

	// https://prettier.io/docs/en/options.html#require-pragma
	requirePragma: false,

	// https://prettier.io/docs/en/options.html#insert-pragma
	insertPragma: false,

	overrides: [
		{
			files: ["defaults.js", "presets.js"],
			options: {
				printWidth: 1000000,
			},
		},
	],
};
