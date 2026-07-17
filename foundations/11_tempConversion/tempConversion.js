//Last Assignment for Loops Section

//goals
//convert f -> c
//convert c -> f
//keep it within one decimal value, and account for rounding

const convertToCelsius = function(temp) {
  //(x - 32) * 5/9
  let result = 0;
  result = (temp - 32) * (5 / 9);
  return Math.round(result * 10)/10;
};

const convertToFahrenheit = function(temp) {
  //x * 9/5 + 32
  let result = 0;
  result = (temp * (9/5) + 32);
  return Math.round(result * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
