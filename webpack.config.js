var path = require('path');

module.exports = {
  entry: './server/server.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'backend.js'
  }
}
