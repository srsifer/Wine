const withImages = require('next-images')

const nextConfig = {
  withImages: withImages({ esModule: true}),
  rectStrictMode: true
}

module.exports = nextConfig
