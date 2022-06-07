const path = require("path");
const APP_DIR = path.resolve(__dirname, "src");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    P1: "./src/P1.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].plugin.js",
    library: "Plugin1",
    libraryTarget: "window",
  },
  externals: {
    "./vendor": "vendor",
    react$: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      window: "React",
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
        include: APP_DIR,
      },
    ],
  },
  optimization: {
    moduleIds: "named",
  },
};
