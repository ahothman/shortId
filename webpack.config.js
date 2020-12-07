const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./client/index.html",
});

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
        hot: true,
    },
    devtool: "source-map",
    entry: {
        main: "./client/app.jsx",
    },
    output: {
        filename: "index.js",
        path: path.join(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
        ],
    },

    resolve: {
        extensions: [".js", ".jsx", ".css"],
    },
    plugins: [htmlPlugin],
};
