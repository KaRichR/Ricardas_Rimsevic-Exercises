function generuotiDerinius(zodis) {
    let deriniai = new Set();
  
    function generuoti(likusi, dabartinis) {
      if (likusi.length === 0) {
        if (dabartinis !== '') {
          deriniai.add(dabartinis);
        }
        return;
      }
  
      for (let i = 0; i < likusi.length; i++) {
        generuoti(likusi.slice(0, i) + likusi.slice(i + 1), dabartinis + likusi[i]);
        generuoti(likusi.slice(0, i) + likusi.slice(i + 1), dabartinis);
      }
    }
  
    generuoti(zodis, '');
  
    return Array.from(deriniai);
  }
  
  let zodis = "doga";
  let visiDeriniai = generuotiDerinius(zodis);
  
  console.log('Visi raidiniai deriniai iš žodžio "' + zodis + '":', visiDeriniai);
  