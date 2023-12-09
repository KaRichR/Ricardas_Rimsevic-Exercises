function findNaNIndex(array) {
    let index = array.findIndex(Number.isNaN)
    return index
   }
   
   let index = findNaNIndex([1,3,4,'hello',NaN,3])
   console.log(index)