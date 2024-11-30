const path = require('path/posix');
const { merge } = require('webpack-merge');
const common  =require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    // DEVELOPMENT MODE
    mode: 'development',
    devtool: 'inline-source-map',

    // DEV SERVER CONFIG
    devServer: {
        static: './dist',
        open: true,
        hot: true,
    },

    // DEV RULES
    module: {
        rules: [
            // CSS FILES
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'postcss-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
      ],
});