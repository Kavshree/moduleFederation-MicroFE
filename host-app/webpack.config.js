const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    publicPath: "https://mymicrofecontainerhostapp.salmonground-5ff0b0fe.westus2.azurecontainerapps.io/",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "hostApp",
      remotes: {
        remoteApp: "remoteApp@https://mymicrofecontainerapp.salmonground-5ff0b0fe.westus2.azurecontainerapps.io/remoteModuleIndex.js",
      },
    }),
     new HtmlWebpackPlugin({
            template: './index.html',  // Use our own template
            filename: 'index.html'         // Output file
        })
  ],
  devServer: {
    port: 8080,
    host: "0.0.0.0", // Allow external access from the container
    allowedHosts: "all", // Allow all host headers
    static: path.join(__dirname, "dist"),
  },
};
