const path = require('path'); // Node.js module to handle file paths

module.exports = {
  // 1️⃣ Entry point → where Webpack starts bundling
  entry: './src/index.js',

  // 2️⃣ Output → where the bundled file will go
  output: {
    filename: 'bundle.js',                 // Name of the bundled JS file
    path: path.resolve(__dirname, 'dist'), // Folder for the bundle
    clean: true,                           // Clears old bundle on rebuild
  },

  // 3️⃣ Mode → development or production
  mode: 'development', // 'development' = easy debugging, 'production' = optimized/minified

  // 4️⃣ Loaders → tells Webpack how to handle non-JS files
  module: {
    rules: [
      {
        test: /\.css$/i,             // Handle CSS files
        use: ['style-loader', 'css-loader'], // Inject CSS into JS
      },
    ],
  },

  // 5️⃣ Dev Server → live reload for development
  devServer: {
    static: './dist', // Folder to serve
    open: true,       // Opens browser automatically
    hot: true,        // Hot Module Replacement (updates without full reload)
  },
};
