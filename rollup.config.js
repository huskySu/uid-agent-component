import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import svgr from "@svgr/rollup";
import alias from "@rollup/plugin-alias";
import json from "rollup-plugin-json";
import url from "rollup-plugin-url";
import path from "path";
import image from "@rollup/plugin-image";
import { eslint } from "rollup-plugin-eslint";

import pkg from "./package.json";

const shouldGenerateSourcemap = process.env.GENERATE_SOURCEMAP === "true";

const common = {
  plugins: [
    eslint({
      include: path.resolve(__dirname, "src"),
      exclude: [
        path.resolve(__dirname, "node_modules"),
        path.resolve(__dirname, "example")
      ]
    }),
    json({
      include: ["src/assets/*", "src/i18n/*"],
      exclude: "node_modules/**"
    }),
    alias({
      entries: {
        SRC: path.resolve(__dirname, "src"),
        ASSETS: path.resolve(__dirname, "src/assets"),
        COMPONENTS: path.resolve(__dirname, "src/components"),
        SERVICES: path.resolve(__dirname, "src/services"),
        MODEL: path.resolve(__dirname, "src/model")
      }
    }),
    image(),
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr({
      svgoConfig: {
        plugins: [
          {
            removeViewBox: false
          }
        ]
      }
    }),
    babel({
      exclude: "node_modules/**",
      // runtimeHelpers: true,
      sourceMaps: shouldGenerateSourcemap,
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    }),
    resolve(),
    commonjs()
  ],
  external: ["@ubnt/ui-components"]
};

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: false
      },
      {
        file: pkg.module,
        format: "es",
        sourcemap: false
      }
    ],
    ...common
  }
];
