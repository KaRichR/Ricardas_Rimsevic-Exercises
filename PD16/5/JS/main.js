function skaiciuotiRaides(eilute) {
    let beTarpų = eilute.replace(/\s/g, '');
  
    return beTarpų.length;
  }
  
  let eilute = "Labas Vakaras";
  let raidziuSkaicius = skaiciuotiRaides(eilute);
  
  console.log('Raidžių skaičius eilutėje (be tarpų):', raidziuSkaicius);
  