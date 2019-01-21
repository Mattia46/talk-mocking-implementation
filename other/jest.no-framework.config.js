const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '../'),
  roots: [path.join(__dirname, '../src')],
  testMatch: ['**/*.test.js'],
  runner: require.resolve('./create-node-runner'),
  displayName: 'No Framework'
}
