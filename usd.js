//Function to convert a number into USD
function usdConvert (number) {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

module.exports = usdConvert;
