// interface Payment {
//   id: string;
//   amount: number;
//   method: "eSewa" | "Khalti";
//   status: "SUCCESS" | "FAILED";
// }

// function createTestData<T>(base: T, overrides: Partial<T>): T {
//   return {
//     ...base,
//     ...overrides
//   };
// }

// const payment: Payment = {
//   id: "P001",
//   amount: 5000,
//   method: "eSewa",
//   status: "SUCCESS"
// };

// const testPayment = createTestData(payment, {
//   amount: 10000,
//   status: "FAILED"
// });

// console.log(testPayment);





interface Payment {
  id: string;
  amount: number;
  method: "eSewa" | "Khalti" | "ConnectIPS";
  status: "SUCCESS" | "PENDING" | "FAILED";
}

interface Response<T> {
  success: boolean;
  data: T;
}

type PaymentSummary = Pick<Payment, "id" | "amount" | "status">;

function createPayment(overrides: Partial<Payment>): Payment {
  const base: Payment = {
    id: "P001",
    amount: 5000,
    method: "eSewa",
    status: "SUCCESS"
  };

  return {
    ...base,
    ...overrides
  };
}

function getPayment(): Promise<Response<Payment>> {
  return Promise.resolve({
    success: true,
    data: createPayment({
      amount: 10000,
      method: "Khalti"
    })
  });
}

async function main(): Promise<void> {
  const response = await getPayment();

  console.log(response.success);
  console.log(response.data.id);
  console.log(response.data.amount);
  console.log(response.data.method);
  console.log(response.data.status);

  const summary: PaymentSummary = {
    id: response.data.id,
    amount: response.data.amount,
    status: response.data.status
  };

  console.log(summary);
}

main();