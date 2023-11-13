let product = [{
    price: 25.99,
    popularity: 8.5,
},
{
    price: 29.99,
    popularity: 7.8,
},
{
    price: 19.99,
    popularity: 8.2,
}
];


const byPrice = (product = []) => {
    const sorter = (a, b) => {
       return +a.price - +b.price;
    };
    product.sort(sorter);
 };
 byPrice(product);

 console.log(product);


 const byPopularityDescending = (product = []) => {
    const sorter = (a, b) => {
        return +b.popularity - +a.popularity;
    };
    product.sort(sorter);
};

byPopularityDescending(product);


 console.log(product);