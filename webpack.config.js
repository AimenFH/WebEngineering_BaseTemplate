const path = require('path');

module.exports = {
    entry: './src/main.ts',  // Your entry point
    mode: 'development',
    output: {
        filename: 'bundle.js',  // Output bundle file
        path: path.resolve(__dirname, 'dist')  // Output directory
    },
    devtool: 'inline-source-map',  // Useful for debugging in development
    module: {
        rules: [
            {
                test: /\.ts$/,  // Handle TypeScript files
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],  // Resolve both .ts and .js extensions
    },
    devServer: {
        static: './dist',  // Serve files from the dist folder
        hot: true,  // Enable hot module replacement
    }
};
