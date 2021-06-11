module.exports = {
  devServer: {
    proxy: 'http://localhost:' + (process.env.PORT || 4040)
  }
}
