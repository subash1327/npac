const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'https://npacindia.in',
  changeOrigin: true,
  secure: true, // set false if SSL issues
}));

app.listen(8080, () => {
  console.log('Proxy running on port 8080');
});