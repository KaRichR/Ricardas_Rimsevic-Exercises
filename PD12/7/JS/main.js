const begikuLaikai = [22, 20, 25, 25];

const greiciausiasLaikas = Math.min(...begikuLaikai);
const vidGreitis = begikuLaikai.reduce((total, time) => total + time, 0) / begikuLaikai.length;
const timeDifference = Math.round(vidGreitis - greiciausiasLaikas);

console.log(`Greičiausio bėgiko laikas: ${greiciausiasLaikas} sek.`);
console.log(`Jis buvo: ${timeDifference} sek geresnis už vidurkį.`);