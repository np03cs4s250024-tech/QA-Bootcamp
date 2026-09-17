const balancePaisa = 300000;
const perTxnLimitPaisa = 2000000;

const transactions = [
    { id: "W-01", gateway: "esewa", amountPaisa: 8000, verified: true },
    { id: "W-02", gateway: "khalti", amountPaisa: 0, verified: true },
    { id: "W-03", gateway: "esewa", amountPaisa: 2500000, verified: true },
    { id: "W-04", gateway: "connectips", amountPaisa: 50000, verified: false },
    { id: "W-05", gateway: "paypal", amountPaisa: 40000, verified: true },
    { id: "W-06", gateway: "khalti", amountPaisa: 250000, verified: true }
];

function feeFor(amountPaisa) {
    if (amountPaisa <= 10000) {
        return 0;
    } else if (amountPaisa <= 100000) {
        return 500;
    } else {
        return 1500;
    }
}

function validate(txn) {
    if (txn.amountPaisa <= 0) {
        return "Invalid amount";
    } else if (!txn.verified) {
        return "KYC pending";
    } else if (txn.amountPaisa > perTxnLimitPaisa) {
        return "Exceeds transaction limit";
    } else if (txn.amountPaisa > balancePaisa) {
        return "Insufficient balance";
    } else if (
        txn.gateway !== "esewa" &&
        txn.gateway !== "khalti" &&
        txn.gateway !== "connectips"
    ) {
        return "Unsupported gateway";
    } else {
        return "OK";
    }
}

let approvedCount = 0;
let rejectedCount = 0;
let totalValuePaisa = 0;

for (const txn of transactions) {

    const result = validate(txn);

    if (result !== "OK") {
        console.log(txn.id, "REJECTED", result);
        rejectedCount++;
        continue;
    }

    const feePaisa = feeFor(txn.amountPaisa);

    switch (txn.gateway) {
        case "esewa":
            console.log(
                txn.id,
                "OK",
                "Rs", (txn.amountPaisa / 100).toFixed(2),
                "fee Rs", (feePaisa / 100).toFixed(2),
                "Redirect to eSewa"
            );
            break;

        case "khalti":
            console.log(
                txn.id,
                "OK",
                "Rs", (txn.amountPaisa / 100).toFixed(2),
                "fee Rs", (feePaisa / 100).toFixed(2),
                "Redirect to Khalti"
            );
            break;

        case "connectips":
            console.log(
                txn.id,
                "OK",
                "Rs", (txn.amountPaisa / 100).toFixed(2),
                "fee Rs", (feePaisa / 100).toFixed(2),
                "Redirect to ConnectIPS"
            );
            break;

        default:
            console.log(txn.id, "Unsupported gateway");
    }

    approvedCount++;
    totalValuePaisa += txn.amountPaisa;
}

console.log(
    `Approved ${approvedCount} · Rejected ${rejectedCount} · Value Rs ${(totalValuePaisa / 100).toFixed(2)}`
);