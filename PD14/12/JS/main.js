let naturalusisSkaicius = 8;
let pirminis = true;

if (naturalusisSkaicius <= 1) {
  pirminis = false; 
} else {
  for (let daliklis = 2; daliklis < naturalusisSkaicius; daliklis++) {
    if (naturalusisSkaicius % daliklis === 0) {
      pirminis = false; 
      break;
    }
  }
}

if (pirminis) {
  console.log(`Skaicius yra pirminis`);
} else {
  console.log(`Skaicius nera pirminis`);
}
