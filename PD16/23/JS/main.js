function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
  }
  
  let num1 = 10;
  let num2 = 5;
  
  console.log("Addition:", add(num1, num2));
  console.log("Subtraction:", subtract(num1, num2));
  console.log("Multiplication:", multiply(num1, num2));
  console.log("Division:", divide(num1, num2));
  