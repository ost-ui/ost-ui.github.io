//npm run dev-mobile | npm run dev-desktop

var path = require('path');
var cp = require('child_process');

console.log('father process. PID:', process.pid);

var child = cp.fork(
  './server.js', 
  ['./site/webpack.mobile.config.js'],
  {
    cwd: path.join(__dirname)
  }
);

var child = cp.fork(
  './server.js', 
  ['./site/webpack.desktop.config.js'],
  {
    cwd: path.join(__dirname)
  }
);

