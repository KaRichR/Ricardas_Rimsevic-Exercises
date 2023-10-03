const autobusuSkaicius = 2;
const autobusuDuomenys = [
  { laikasVal: 1, laikasMin: 50, keleiviai: 17 },
  { laikasVal: 2, laikasMin: 0, keleiviai: 25 }
];

let bendrasKeleiviuSkaicius = 0;
for (let i = 0; i < autobusuSkaicius; i++) {
  bendrasKeleiviuSkaicius += autobusuDuomenys[i].keleiviai;
}

let bendrasLaikasMin = 0;
for (let i = 0; i < autobusuSkaicius; i++) {
  const laikasVal = autobusuDuomenys[i].laikasVal;
  const laikasMin = autobusuDuomenys[i].laikasMin;
  const laikasMinViso = laikasVal * 60 + laikasMin;
  bendrasLaikasMin += laikasMinViso;
}

const vidutinisLaikasMin = Math.round(bendrasLaikasMin / autobusuSkaicius);

let autobusuMaziau10Keleiviu = 0;
for (let i = 0; i < autobusuSkaicius; i++) {
  if (autobusuDuomenys[i].keleiviai < 10) {
    autobusuMaziau10Keleiviu++;
  }
}

console.log(`Bendrai pervežtų keleivių skaičius = ${bendrasKeleiviuSkaicius}.`);
console.log(`Vidutinis sugaištas važiavimo laikas (min.): ${vidutinisLaikasMin}.`);
console.log(`Autobusų skaičius (keleiviai < 10): ${autobusuMaziau10Keleiviu}.`);
