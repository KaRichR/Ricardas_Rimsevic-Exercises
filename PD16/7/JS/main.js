function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedStr = str.split('').reverse().join(''); 
    return str === reversedStr; 
   }
   
   console.log(isPalindrome("Madam")); 
   console.log(isPalindrome("Hello"));