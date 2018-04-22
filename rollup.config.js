import pkg from "./package.json";
import uglify from "rollup-plugin-uglify";

export default [
	{
		plugins: [uglify()],
		input: "src/index.js",
		output: [
			{ file: pkg.main, format: "cjs" },
			{ file: pkg.module, format: "es" },
		],
	},
];
