interface Payment {
  id: string;
  amount: number;
  method: "eSewa" | "Khalti";
  status: "SUCCESS" | "PENDING" | "FAILED";
}

type PaymentWithoutId = Omit<Payment, "id">;

const payment: PaymentWithoutId = {
  amount: 5000,
  method: "eSewa",
  status: "SUCCESS"
};

console.log(payment.amount);
console.log(payment.method);
console.log(payment.status);