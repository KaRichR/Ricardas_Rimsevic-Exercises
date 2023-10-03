const egluciuSkaicius = 6;
const eglutesAukstis = [167, 134, 145, 156, 155, 176];

let egluciuAuksciuSuma = 0;
for (let i = 0; i < egluciuSkaicius; i++) {
  egluciuAuksciuSuma += eglutesAukstis[i];
}

const vidutinisAukstis = egluciuAuksciuSuma / egluciuSkaicius;

console.log(`Eglutės aukščio vidurkis: ${vidutinisAukstis.toFixed(1)} cm`);
