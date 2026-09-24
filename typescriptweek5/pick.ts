interface Payment {
  id: string;
  amount: number;
  method: "eSewa" | "Khalti";
  status: "SUCCESS" | "PENDING" | "FAILED";
}


type paymentSumery = Pick<Payment, "id" | "amount">;
const summery : paymentSumery={
    id : "123",
    amount : 45620,
};


console.log(summery.id);
console.log(summery.amount);