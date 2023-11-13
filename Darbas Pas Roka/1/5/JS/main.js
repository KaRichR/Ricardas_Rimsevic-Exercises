const numRows = 5;

for(let i = 0; i < numRows; i++) {
    let stars = ''
    for(let j = 0; j < numRows - i; j++) {
    stars += '*'
  }
  console.log(stars)
}