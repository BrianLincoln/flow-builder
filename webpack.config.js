

module.exports = {
    entry: './src/client.js',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module : {
        loaders : [
            {
                test: /\.jsx?$/,
                loader: 'babel'
            },
            {
                test: require.resolve('react'),
                loader: 'expose?React'
            },
            {
                test: require.resolve('react-dom'),
                loader: 'expose?ReactDOM'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
