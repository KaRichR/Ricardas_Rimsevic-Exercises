function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
  }
  
  const svoris = 70; // kg
  const ugis = 1.75; // metrai
  
  const bmi = calculateBMI(svoris, ugis);
  
  console.log("Kūno masės indeksas (BMI):", bmi);
  