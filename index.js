class Calculator {
  constructor() {
    //properties
    this.pi = Math.PI;
    this.e = Math.exp(1);
  }

  //getter

  // returnPI () {
  // return this.pi
  // }

  //methods

  ratio(x, y, width) {
    console.log(`height is ${(y / x) * width} on ratio x:y`);
  }

  percentage(x, y) {
    console.log(`Percentage of x in y is: ${(x / y) * 100} %`);
  }

  add(x, y) {
    console.log(`Sum of x and y is: ${x + y}`);
  }
  subtract(x, y) {
    console.log(`Difference of x and y is: ${x - y}`);
  }
  multiply(x, y) {
    console.log(`Product of x and y is: ${x * y}`);
  }
  divide(x, y) {
    if (y > 0) {
      console.log(`Quotient of x and y is: ${x / y}`);
    } else {
      console.log(`Please enter value of y greater than 0`);
    }
  }
  modulation(x, y) {
    if (y > 0) {
      console.log(`Remainder of x and y is: ${x % y}`);
    } else {
      console.log(`Please enter value of y greater than 0`);
    }
  }
  elevate(x, y) {
    console.log(`Power of x elevated to y is: ${x ** y}`);
  }
  sqrt(x) {
    console.log(`Square root of x is: ${x ** 0.5}`);
  }
}

const calculate = new Calculator();
console.log(calculate.pi);
console.log(calculate.e);
calculate.ratio(10, 50, 20);
calculate.percentage(10, 100);
calculate.add(3, 3);
calculate.subtract(10, 7);
calculate.multiply(5, 6);
calculate.divide(4, 10);
calculate.modulation(7, 5);
calculate.elevate(2, 3);
calculate.sqrt(4);
// console.log(calculate);
