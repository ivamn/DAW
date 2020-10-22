const path = require('path');

module.exports = {
    devServer: {
        contentBase: __dirname, // Default (project's root directory)
        publicPath: '/dist/', // Path where bundles are
        compress: true, // Enable gzip compresion when serving content
        port: 8080 // Default
    },
    mode: 'development',
    devtool: 'source-map',
    context: path.join(__dirname, './src'),
    entry: {
        index: './index.js',
        addproduct: './add-product.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname + '/dist')
    },
    module: {
        rules: [
            { test: /\.handlebars$/, loader: "handlebars-loader" },
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: "initial", // Optimize chunks generation
                    name: "commons", // chunk name
                    minChunks: 2, // How many files import this chunk
                    minSize: 0 // Minimum size of the separated chunk
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
}