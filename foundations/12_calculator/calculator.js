const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  return sum;
};

const multiply = function(a) {
  let product = 1;
  for (let i = 0; i < a.length; i++) {
    product = product * a[i];
  }
  return product;
};

const power = function(base, exponent) {
	return (base ** exponent);
};

const factorial = function(num) {
	if (num < 0)
    return -1;

  else if (num === 0)
    return 1;

  else {
    return (num * factorial(num -1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
