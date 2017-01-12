module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.jsx$/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react']
            }

        }, {
            test: /\.svg$/,
            loader: 'file-loader'
        }]
    }
};
