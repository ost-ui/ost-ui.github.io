const path = require('path');
const cwd = path.join(__dirname, '../');

module.exports = {
  PORT: 3331,
  entry: {desktop: path.join(__dirname, './mobile/index.js')},
  output: {
    path: path.resolve(cwd, './dist/mobile'),
  }
}