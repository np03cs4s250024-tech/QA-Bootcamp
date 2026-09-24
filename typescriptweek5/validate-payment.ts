type PaymentStatus = "SUCCESS" | "PENDING" | "FAILED";

interface Payment {
  amountPaisa: number;
  status: PaymentStatus;
}

function validate(payment: Payment): string {
  if (payment.amountPaisa <= 0) {
    return "Amount must be positive";
  }

  if (payment.status !== "SUCCESS") {
    return "Not a successful payment";
  }

  return `Valid: ${payment.amountPaisa} paisa`;
}

console.log(validate({
  amountPaisa: 50000,
  status: "SUCCESS"
}));