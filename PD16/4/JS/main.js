function faktorialas(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * faktorialas(n - 1);
    }
  }
  
  let skaicius = 5;
  let faktorialoReiksme = faktorialas(skaicius);
  
  console.log('Faktorialas (' + skaicius + '!) yra:', faktorialoReiksme);
  