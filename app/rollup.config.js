// rollup.config.js
import css from "rollup-plugin-css-only";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
	input: 'src/main.js',
	output: {
		file: 'build/bundle.js',
		format: 'es'
	},
    plugins: [
        css({ output: "bundle.css"}),
        nodeResolve({ browser: true, }),
        commonjs()
    ]
};