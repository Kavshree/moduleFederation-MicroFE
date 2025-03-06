const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./remoteModuleIndex.js",
  output: {
    publicPath: "http://localhost:8081/",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remoteApp",
      filename: "remoteModuleIndex.js",
      exposes: {
        "./Module": "./remoteModuleIndex.js",
      },
    }),
    new HtmlWebpackPlugin({
        template: './index.html',  // Use our own template
        filename: 'index.html'         // Output file
    })
  ],
  devServer: {
    port: 8081,
    host: "0.0.0.0", // Allow external access from the container
    static: path.join(__dirname, "dist"),
  },
};
