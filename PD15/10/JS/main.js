let arr = ['labas', 'labas', 'hello', 'geras', 'vienas', 'du', 'labas'];

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates(arr));
