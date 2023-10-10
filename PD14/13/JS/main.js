function sveikejiSkaiciai() {
    for (let num = 1; num <= 300; num++) {
      let dalikliai = 0;
      for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
          dalikliai++;
        }
        if (dalikliai > 5) {
          break; 
        }
      }
      if (dalikliai === 5) {
        console.log(num);
      }
    }
  }
  
  console.log("Sveikieji skaičiai nuo 1 iki 300 su tiksliai penkiais dalikliais:");
  sveikejiSkaiciai();
  