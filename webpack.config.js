let path = require ('path')

// new webpack.ProvidePlugin({
//     $: 'jquery',
//     jQuery: 'jquery'
// })

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "main.js",
        publicPath: "dist/"
    },
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    devServer: {
        overlay: true
    }
}

module.exports = conf