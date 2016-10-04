//Code for Node with results of balance.js functions
var http = require('http');
var finalBal = require('./balance');
http.createServer(function (req, res) {
  res.writeHead(200);
  res.write(finalBal.balance());
  res.write(finalBal.dollars());
  res.end();
}).listen(3000);
