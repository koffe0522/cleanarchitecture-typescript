import baseConfig from "./base.config";
import merge from "webpack-merge";

const config = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
});

export default config;