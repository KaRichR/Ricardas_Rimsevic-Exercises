const kelioIlgis = 264;
const autoGreitis = 60;

const autoGreitisMetrais = (autoGreitis *1000) / 3600;

const laikasSekundemis = kelioIlgis / autoGreitisMetrais;

console.log("Automobilis pravaziuos per", laikasSekundemis.toFixed(2), "s.");