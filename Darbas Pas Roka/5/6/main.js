let employee = [{
    name: "Adamas",
    salary: 1000,
},
{
    name: "Tomas",
    salary: 900,
},
{
    name: "Karolis",
    salary: 800,
}
];

let totalSalary = 0;

for (let i = 0; i < employee.length; i++) {
  totalSalary += employee[i].salary;
}

let averageSalary = totalSalary / employee.length;

console.log("Average Salary: " + averageSalary);