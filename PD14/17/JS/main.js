function isPalindrome(number) {
    const strNum = number.toString();
    const reversedStr = strNum.split('').reverse().join('');
    return strNum === reversedStr;
  }
  
  let count = 0;
  let number = 1;
  
  while (count < 10) {
    const square = number * number;
    if (isPalindrome(square)) {
      console.log(`${number} ^ 2 = ${square}`);
      count++;
    }
    number++;
  }
  