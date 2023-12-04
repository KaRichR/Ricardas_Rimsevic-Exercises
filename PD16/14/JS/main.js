function generuotiDaugybosLentele(n) {
    let lentele = [];
  
    for (let i = 1; i <= n; i++) {
      let eilute = [];
      for (let j = 1; j <= n; j++) {
        eilute.push(i * j);
      }
      lentele.push(eilute);
    }
  
    return lentele;
  }
  
  let matrica = generuotiDaugybosLentele(10);
  
  for (let i = 0; i < matrica.length; i++) {
    console.log(matrica[i].join('\t'));
  }
  