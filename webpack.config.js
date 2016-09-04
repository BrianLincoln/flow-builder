var path = require('path');

const PATHS = {
  style: path.join(__dirname, './src/style')
};

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
                loader: 'babel',
                include: path.resolve(__dirname, 'src/')
            },
            {
                test: require.resolve('react'),
                loader: 'expose?React',
                include: path.resolve(__dirname, 'src/')
            },
            {
                test: require.resolve('react-dom'),
                loader: 'expose?ReactDOM',
                include: path.resolve(__dirname, 'src/')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
