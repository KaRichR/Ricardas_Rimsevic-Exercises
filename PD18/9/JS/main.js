const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };
  
  calculator.extend = (func) => {
    Object.assign(calculator, func);
  };
  
  const trigonometry = {
    sin: (x) => Math.sin(x),
    cos: (x) => Math.cos(x),
  };
  
  calculator.extend(trigonometry);
  

  console.log(calculator.add(2, 3)); 
  console.log(calculator.sin(Math.PI / 2)); 