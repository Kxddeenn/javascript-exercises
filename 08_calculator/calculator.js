const add = function(firstNumber, secondNumber) {
   return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(array) {
	
  let sumArray = 0;
  for (let i = 0 ; i < array.length; i++){
    sumArray += array[i];
  }

  return sumArray;

};

const multiply = function(array) {

  let productArray = 1;
  for (let i = 0 ; i < array.length; i++){
    productArray *= array[i];
  }

  return productArray;

};

const power = function(number, power) {
	
  return Math.pow(number,power);

};

const factorial = function(number) {
	
  let factorialResult = 1;

  if ( number === 0 ){
    return factorialResult;
  }

  for ( let i = 1 ; i <= number ; i++){

    factorialResult *= i;

  }

  return factorialResult;

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
