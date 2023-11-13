let Cartitems = [{
    name: "Knyga1",
    price: 19.99,
    quantity: 2,
},
{
    name: "Knyga2",
    price: 11.99,
    quantity: 1,
},
{
    name: "Knyga3",
    price: 14.99,
    quantity: 3,
}
];

const totalCosts = Cartitems.map((product) => product.price * product.quantity);

const totalPrice = totalCosts.reduce((acc, curr) => acc + curr, 0);

console.log('Total Cost for Each Item: ', totalCosts);
console.log('Total Price: ', totalPrice);