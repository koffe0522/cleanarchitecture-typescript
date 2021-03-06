import * as path from 'path';
import nodeExternals from 'webpack-node-externals';
import * as webpack from 'webpack';

const SRC_ROOT = path.join(__dirname, "../src");

const config: webpack.Configuration = {
  context: SRC_ROOT,
  target: 'node',
  mode: 'production',
  entry: path.resolve("src", "index.ts"),
  output: {
    filename: "server.js",
    path: path.join(__dirname, "../dist"),
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
    alias: {
      "@": path.join(__dirname, "/src/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.json",
        },
      },
    ],
  },
  externals: [nodeExternals() as any],
};

export default config;