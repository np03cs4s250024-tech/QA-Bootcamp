function validate(payment) {
  if (payment.amountPaisa <= 0) {
    return "Amount must be positive";
  }

  if (payment.status !== "SUCCESS") {
    return "Not a successful payment";
  }

  return `Valid: ${payment.amountPaisa} paisa`;
}

console.log(validate({
  amountPaisa: "50000",
  status: "SUCESS"
}));