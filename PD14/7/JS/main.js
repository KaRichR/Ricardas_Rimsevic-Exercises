var metai1 = 1997;
var metai2 = 2018;
var list = [];
for (var i = metai1; i <= metai2; i++) {
        list.push(i);
}

for (var j = 0; j < list.length; j++) {
    var year = list[j];
    
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      console.log(year);
    }
  }