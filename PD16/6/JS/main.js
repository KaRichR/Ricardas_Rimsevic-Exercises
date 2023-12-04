function apverstiSkaiciu(skaicius) {
    let apverstasSkaicius = parseInt(skaicius.toString().split('').reverse().join(''));
  
    return apverstasSkaicius;
  }
  
  let pradinisSkaicius = 12345;
  let apverstas = apverstiSkaiciu(pradinisSkaicius);
  
  console.log('Pradinis skaičius:', pradinisSkaicius);
  console.log('Apverstas skaičius:', apverstas);
  