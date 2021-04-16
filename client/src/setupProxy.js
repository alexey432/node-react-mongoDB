const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/auth/google', { target: 'http://localhost:5000/' }));
};

//ACTIVATE IF SMTH DOESN'T WORK 
module.exports = function(app) {
  app.use(proxy('/api/*', { target: 'http://localhost:5000/' }));
};



// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use("/auth/google", createProxyMiddleware({ target: "http://localhost:5000" }));
// };