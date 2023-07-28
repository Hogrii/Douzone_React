const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/api/v1', {
      target: 'http://localhost:8091',
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware('/login', {
      target: 'http://localhost:8091',
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware('/api/v2', {
      target: 'http://localhost:8090',
      changeOrigin: true,
    })
  );
};
