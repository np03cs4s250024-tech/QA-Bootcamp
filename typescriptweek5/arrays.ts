interface Payment {
  id: string;
  amount: number;
}

const payments: Array<Payment> = [
  {
    id: "P001",
    amount: 5000
  },
  {
    id: "P002",
    amount: 10000
  }
];

console.log(payments[0]?.amount);
console.log(payments[1]?.amount);
