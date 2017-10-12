const path = require('path');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src')
};

module.exports = {
  entry: path.join(paths.SRC, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'index.js',
    library: 'eyeem-components',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    react: 'react',
    'styled-components': 'styled-components',
    'react-create-component-from-tag-prop':
      'react-create-component-from-tag-prop',
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: '_',
      root: '_'
    }
  }
};
