const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '../'),
  roots: [path.join(__dirname, '../src')],
  testMatch: ['**/*.jest.js'],
  displayName: 'jest'
}
