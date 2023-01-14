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
};

module.exports {}