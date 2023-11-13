function cloneAndModify(obj, property, value){
    const clonedObj = { ...obj };
    clonedObj[property] = value;
    return clonedObj;
}

const originalObj = {
    name: "John Doe",
    age: 14,
    verified: false
}

const modifiedObj = cloneAndModify(originalObj, 'age', 35);

console.log(originalObj);
console.log(modifiedObj);