let a = 40;
let b = 30;
let c = 55;

if (a >= b && a >= c) {
  if (b >= c) {
    let sum = a + b;
    console.log(sum);
  } else {
    let sum = a + c;
    console.log(sum);
  }
} else if (b >= a && b >= c) {
  if (a >= c) {
    let sum = b + a;
    console.log(sum);
  } else {
    let sum = b + c;
    console.log(sum);
  }
} else {
  if (a >= b) {
    let sum = c + a;
    console.log(sum);
  } else {
    let sum = c + b;
    console.log(sum);
  }
}
