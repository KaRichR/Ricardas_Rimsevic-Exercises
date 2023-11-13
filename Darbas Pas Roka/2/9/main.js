function sumNumbers(...numbers) {
    let total = 0;
    for (const arg of numbers) {
      total += arg;
    }
    return total;
  }
  
  console.log(sumNumbers(1, 2, 3));