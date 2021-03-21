import * as path from 'path';
import * as webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import Dotenv from 'dotenv-webpack';

const config: webpack.Configuration = {
  target: 'node',
  mode: 'production',
  entry: path.resolve("src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "server.js",
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../src/"),
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
  plugins: [new Dotenv({ systemvars: true, path: path.resolve(__dirname, "../.env") })],
  externals: [nodeExternals() as any],
};

export default config;