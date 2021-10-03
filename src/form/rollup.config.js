import jsx from "acorn-jsx";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";

// the entry point for the library
const input = "src/index.ts";

//
var MODE = [{ format: "cjs" }, { format: "esm" }, { format: "umd" }];

var config = [];

MODE.map((m) => {
  var conf = {
    input: input,
    output: {
      name: "@serusko/formik",
      file: `dist/index.${m.format}.js`,
      format: m.format,
      exports: "auto",
      sourcemap: true,
    },
    // this externalizes react to prevent rollup from compiling it
    external: ["react", /@babel\/runtime/],
    acornInjectPlugins: [jsx()],
    plugins: [
      // these are babel configurations
      babel({
        exclude: "node_modules/**",
        plugins: ["@babel/transform-runtime"],
        babelHelpers: "runtime",
      }),
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
        tsconfig: "tsconfig.json",
      }),
    ],
  };
  config.push(conf);
});

export default config;
