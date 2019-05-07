//---có module và option-----

// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: "[local]___[hash:base64:5]",
//   }
// })
//------đơn giản, k có module-------
const withCSS = require('@zeit/next-css')
module.exports = withCSS()