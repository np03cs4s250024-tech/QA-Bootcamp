interface Payment {
  id: string;
  amount: number;
  method: "eSewa" | "Khalti" | "ConnectIPS";
  status: "SUCCESS" | "PENDING" | "FAILED";
}

const basePayment: Payment = {
  id: "P001",
  amount: 5000,
  method: "eSewa",
  status: "SUCCESS"
};

function creatPayment (overrides : Partial<Payment>) : Payment{
    return{
        ...basePayment,
        ...overrides
    };
}


const payment1 = creatPayment({
    amount : 10000
});

const payment2 = creatPayment({
    method : "Khalti",
    status : "PENDING",                                                
});

console.log(payment1);
console.log(payment2);