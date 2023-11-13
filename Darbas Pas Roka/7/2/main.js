let person = {
    name: "Arturas",
    age: 18
};

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}
