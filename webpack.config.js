var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            inject: 'body'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                        options: {
                            publicPath: ''
                        }
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                        options: {
                            publicPath: ''
                        }
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
 
        

    },
};

