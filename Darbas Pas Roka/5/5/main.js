let names = [{
    name: "Adamas",
},
{
    name: "Tomas",
},
{
    name: "Karolis",
}
];

function createEmailList(customers, domain) {
    return customers.map(customer => customer.name.toLowerCase() + domain);
  }
  
const emailDomain = "@example.com";

const emailList = createEmailList(names, emailDomain);
console.log(emailList);