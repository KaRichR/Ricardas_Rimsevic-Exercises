let user = [{
    first_name: "Adam",
    age: 18,
    location: "Vilnius",
},
{
    first_name: "Dominykas",
    age: 26,
    location: "Kaunas",
},
{
    first_name: "Karolis",
    age: 22,
    location: "Trakai",
}
];

let filteredUsers = [];
for (let i= 0; i<user.length; i++) {
    if (user[i].age > 20 && user[i].location === 'Kaunas' ) {
        filteredUsers = [...filteredUsers, user[i]];
    }
}
console.log(filteredUsers);