function devident(num1, num2) {
  try {
    let result = num1 / num2;
    if (isNaN(result)) {
      throw new Error("Patikrinkite 5vestus duomenis");
    }
    return result;
  } catch (e) {
    console.log(e.message);
  }
}
console.log(devident(4, 2));
//console.log(devident("jonas", 5));
