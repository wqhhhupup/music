
const { resolve } = require('path')
const resolved = dir =>  resolve(__dirname, dir) 

module.exports = {
  webpack: {
    alias: {
      '@': resolved('src'),
      'components': resolved('src/components')
    }
  }
}
