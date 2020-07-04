module.exports = {
    devServer: {
      proxy: {
        '/users': {
          target: 'http://localhost:3000',
          ws: true,
          changeOrigin: true
        },
        '/goods': {
          target: 'http://localhost:3000',
          ws: true,
          changeOrigin: true
        },
        '/carts': {
          target: 'http://localhost:3000',
          ws: true,
          changeOrigin: true
        },
        '/textuse': {
          target: 'http://localhost:3000',
          ws: true,
          changeOrigin: true
        },
      }
    }
  }