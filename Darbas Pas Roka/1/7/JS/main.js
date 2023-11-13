const factorialOf = integer => {
    let factorial = 1;
  
    for(let i = 1; i <= integer; i++) {
      factorial *= i;
    }
  
    return factorial;
  }

  console.log(factorialOf(10));