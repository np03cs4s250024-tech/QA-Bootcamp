interface Payment {
  id: string;
  amount: number;
  status: "SUCCESS" | "PENDING" | "FAILED";
}

interface Response<T> {
  success: boolean;
  data: T;
}

const paymentResponse: Response<Payment> = {
  success: true,
  data: {
    id: "P001",
    amount: 5000,
    status: "SUCCESS"
  }
};

const messageResponse: Response<string> = {
  success: true,
  data: "Payment completed successfully"
};

console.log(paymentResponse.data.amount);
console.log(messageResponse.data);