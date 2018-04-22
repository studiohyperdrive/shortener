module.exports = {
	extends: [
		"plugin:prettier/recommended",
		"@studiohyperdrive/eslint-config",
		"@studiohyperdrive/eslint-config/lib/es6.js",
	],
	env: {
		jest: true,
	},
	parserOptions: {
		sourceType: "module",
	},
};
