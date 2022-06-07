const path = require("path");
const APP_DIR = path.resolve(__dirname, "src");

module.exports = {
  mode: "developemnt",
  devtool: "hidden-source-map",
  entry: {
    vendor: "./src/vendor.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "vendor",
    libraryTarget: "window",
    libraryExport: "default",
    pathinfo: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  optimization: {
    moduleIds: "named",
  },
};
