let n = 30;
let m = 40;

for (let i = n; i <= m; i++) {
  if (i % 3 === 0 && i % 10 !== 3) {
    console.log(i);
  }
}
