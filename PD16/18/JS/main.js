let firstUniqChar = function (s) {
    const map = new Map();
  
    for (let i = 0; i < s.length; i++) {
      map.set(s[i], map.has(s[i]) ? -1 : i);
    }
  
    for (let value of map.values()) {
      if (value !== -1) return value;
    }
  
    return -1;
  };
  
  let inputString = "ajhdsjkasdjk";
let result = firstUniqChar(inputString);

console.log("Index of the first unique character in '" + inputString + "':", result);
