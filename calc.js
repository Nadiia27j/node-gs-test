// sum
// sub
// mult
// div

// node calc.js sum 2 5 6 7
// node calc.js mult 2 2 2

const [, , operation, ...data] = process.argv;
const numbers = data.map(val => Number(val));

// console.log(numbers);
// console.log(operation);

function calc(operation, numbers) {
  let res;

  switch (operation) {
    case "sum":
      res = numbers.reduce((acc, number) => acc + number);
      break;
    case "sub":
      res = numbers.reduce((acc, number) => acc - number);
      break;
    case "mult":
      res = numbers.reduce((acc, number) => acc * number);
      break;
    case "div":
      res = numbers.reduce((acc, number) => acc / number);
      break;
    default:
        res ='unknowm operation type!';
      break;
  }
}

const res = calc(operation, numbers);
console.log(res);
