function ilgiausiasZodis(eilute) {
    let zodziai = eilute.split(' ');
  
    let ilgiausias = zodziai.reduce(function (ilgiausiasZodis, dabartinisZodis) {
      return dabartinisZodis.length > ilgiausiasZodis.length ? dabartinisZodis : ilgiausiasZodis;
    }, '');
  
    return ilgiausias;
  }
  
  let eilute = "Parašykite JavaScript funkciją, kuri suranda ilgiausią žodį pateiktoje eilutėje";
  let rezultatas = ilgiausiasZodis(eilute);
  
  console.log('Ilgiausias žodis eilutėje:', rezultatas);
  