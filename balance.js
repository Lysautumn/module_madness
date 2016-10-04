//Takes random number from generator and passes it into the function to get USD
var number = require('./random');
var usdConvert = require('./usd');

exports.dollars = function () {
  return usdConvert(number(100, 1000000));
};

exports.balance = function () {
  return ('Account balance: \n');
};
