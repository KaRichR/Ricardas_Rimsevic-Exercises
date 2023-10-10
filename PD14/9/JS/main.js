function skaiciuotiLastelesPoValandu(valandos) {
    const pradinisLasteles = 1; 
    const dalijimosiPeriodas = 3; 
  
    const kartai = Math.floor(valandos / dalijimosiPeriodas);
  
    const galutinisLasteles = pradinisLasteles * Math.pow(2, kartai);
  
    return galutinisLasteles;
  }
  
  for (let valandos = 3; valandos <= 24; valandos += 3) {
    const lasteles = skaiciuotiLastelesPoValandu(valandos);
    console.log(`Po ${valandos} valandų bus ${lasteles} ląstelės.`);
  }
  