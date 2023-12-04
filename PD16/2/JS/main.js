function celsijusIFarenheitais(celsijus) {
  let farenheitai = (9/5) * celsijus + 32;
  return farenheitai;
}

let celsijusTemperatura = 25;
let farenheitaiTemperatura = celsijusIFarenheitais(celsijusTemperatura);

console.log(celsijusTemperatura + ' Celsijaus laipsnių yra ' + farenheitaiTemperatura + ' Farenheito laipsnių.');
