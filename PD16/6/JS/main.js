function reverseNumber(n){
	n += "";
	return n.split("").reverse().join("");
}
  
  let pradinisSkaicius = 12345;
  let apverstas = reverseNumber(pradinisSkaicius);
  
  console.log('Pradinis skaičius:', pradinisSkaicius);
  console.log('Apverstas skaičius:', apverstas);
  