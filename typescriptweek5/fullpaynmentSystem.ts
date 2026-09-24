interface Payment {
  amountPaisa: number;
  status: "SUCCESS" | "PENDING" | "FAILED";
  method: "eSewa" | "Khalti" | "ConnectIPS";
}

const base: Payment = {
  amountPaisa: 50000,
  status: "SUCCESS",
  method: "eSewa"
};

function validate(payment: Payment): string {
  if (payment.amountPaisa <= 0) {
    return "Amount must be positive";
  }

  if (payment.status !== "SUCCESS") {
    return "Not a successful payment";
  }

  return `Valid: ${payment.amountPaisa} paisa`;
}

function makeTest(over: Partial<Payment>): Payment {
  return { ...base, ...over };
}

const payment1 = makeTest({
  status: "FAILED"
});

const payment2 = makeTest({
  method: "Khalti"
});

const payment3 = makeTest({
  amountPaisa: 100000,
  status: "PENDING"
});

const payment4 = makeTest({
  amountPaisa: 75000,
  status: "SUCCESS",
  method: "ConnectIPS"
});

console.log(payment1);
console.log(payment2);
console.log(payment3);
console.log(payment4);

console.log(validate(base));
console.log(validate(payment1));
console.log(validate(payment2));
console.log(validate(payment3));
console.log(validate(payment4));