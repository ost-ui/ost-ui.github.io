const path = require('path');
const cwd = path.join(__dirname, '../');

module.exports = {
  PORT: 3330,
  entry: {desktop: path.join(__dirname, './desktop/index.js')},
  output: {
    path: path.resolve(cwd, './dist/site'),
  }
}