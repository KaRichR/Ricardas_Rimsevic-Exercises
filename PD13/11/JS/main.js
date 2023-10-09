const s = 1000; 
const k = 5000; 

const n = 4; 
const t = 2000; 
const m = 1500; 

const totalIncome = t + m;

if (totalIncome / n >= s && k <= totalIncome) {
  console.log("Bankas suteiks paskolą.");
} else {
  console.log("Bankas paskolos nesuteiks.");
}
