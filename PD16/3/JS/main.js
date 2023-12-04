function trikampioPlotas(a, b, c) {
    let s = (a + b + c) / 2;
    let plotas = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return plotas;
  }

  let kraštinėA = 5;
  let kraštinėB = 6;
  let kraštinėC = 7;
  
 let plotas = trikampioPlotas(kraštinėA, kraštinėB, kraštinėC);
  
  console.log('Trikampio plotas yra:', plotas);
  