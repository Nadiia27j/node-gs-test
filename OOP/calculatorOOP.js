class CalculatorOOP{
    constructor(operation, numbers) {
       this.operation = operation;
       this.numbers = numbers;
    };


    calc() {
        function calc(operation, numbers) {
            let res = null;
          
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
    }

    init() {
       return this.calc(this.operation, this.numbers);
    }

    
};

const [, , operation, ...data] = process.argv;
const numbers = data.map(val => Number(val));


module.exports = new CalculatorOOP(operation,numbers).init();