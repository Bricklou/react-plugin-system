const path = require("path");

const APP_DIR = path.resolve(__dirname, "src");
const BUILD_DIR = path.resolve(__dirname, "dist");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  devtool: "source-map",
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    path: BUILD_DIR,
    filename: "[name].bundle.js",
    library: "main",
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
    "react-dom$": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      window: "ReactDOM",
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
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
