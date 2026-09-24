interface Payment {
  id: string;
  amount: number;
  status: "SUCCESS" | "FAILED";
}

interface Response<T> {
  success: boolean;
  data: T;
}

function getPayment(): Promise<Response<Payment>> {
  return Promise.resolve({
    success: true,
    data: {
      id: "P001",
      amount: 5000,
      status: "SUCCESS"
    }
  });
}

async function main(): Promise<void> {
  const response = await getPayment();

  console.log(response.data.id);
  console.log(response.data.amount);
  console.log(response.data.status);
}

main();