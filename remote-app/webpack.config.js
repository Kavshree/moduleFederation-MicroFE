const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const remoteURL = process.env.REMOTE_URL || "http://localhost:8081/";
console.log("Configured REMOTE_URL env variable: ", process?.env?.REMOTE_URL);

/* To configure the below environment variables in Azure Container
REMOTE_URL
https://mymicrofecontainerapp.salmonground-5ff0b0fe.westus2.azurecontainerapps.io/

HOST_URL:
https://mymicrofecontainerhostapp.salmonground-5ff0b0fe.westus2.azurecontainerapps.io/
**/

module.exports = {
  mode: "development",
  entry: "./remoteModuleIndex.js",
  output: {
    publicPath: remoteURL,
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
    allowedHosts: "all", // Allow all host headers
    static: path.join(__dirname, "dist"),
  },
};
