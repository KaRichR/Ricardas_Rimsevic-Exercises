const p1 = 30; 
const p2 = 30; 
const p = 10; 

const s = 60; 

const nuolaidosKaina1 = p1 - (p1 * p) / 100;
const nuolaidosKaina2 = p2 - (p2 * p) / 100;

const Kaina = nuolaidosKaina1 + nuolaidosKaina2;

if (Kaina <= s) {
  console.log(`Pirkėjas gali įsigyti abi prekes iš viso už ${Kaina} eurus.`);
} else {
  console.log(`Pirkėjas neturi pakankamai pinigų abiem prekėms įsigyti.`);
}
