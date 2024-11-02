const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/airtable',
        createProxyMiddleware({
            target: 'https://api.airtable.com',
            changeOrigin: true,
            pathRewrite: {
                '^/airtable': ''
            },
        })
    );
};
