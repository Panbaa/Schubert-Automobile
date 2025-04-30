const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Proxy middleware configuration
app.use('/api/mobile-de/cars', createProxyMiddleware({
  target: 'https://services.mobile.de/search-api/search',
  changeOrigin: true,
  pathRewrite: {
    '^/api/mobile-de/cars': ''
  },
  onProxyReq: (proxyReq) => {
    proxyReq.setHeader('Accept', 'application/vnd.de.mobile.api+json');
  }
}));

// Handle all other routes by serving the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});