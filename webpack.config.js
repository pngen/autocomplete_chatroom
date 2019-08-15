module.exports = {
    entry: './src/app.jsx',
    output: {
        path: __dirname + '/public/js/',
        filename: 'app.js'
    },
    devtool: '#sourcemap',
    stats: {
        colors: true,
        reasons: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    }
}