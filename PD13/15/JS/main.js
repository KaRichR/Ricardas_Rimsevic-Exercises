const t = 330; 
const p = 10; 
const a = 300; 

const nuolaidosKaina = t - (t * p) / 100;

if (a >= nuolaidosKaina) {
  console.log(`Išmanųjį telefoną Austėja gali įsigyti už ${nuolaidosKaina} eurus.`);
} else {
  console.log(`Išmaniajam telefonui įsigyti Austėjos santaupų neužtenka.`);
}
