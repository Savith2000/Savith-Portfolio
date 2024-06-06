const createProxyMiddleware = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api/register", "/api/register/*"], //routes the proxy is looking for
    createProxyMiddleware({
      target: "http://localhost:5000", // proxy will serve data to target
    })
  );
};
