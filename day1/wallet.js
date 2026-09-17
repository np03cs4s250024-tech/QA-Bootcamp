const merchantName = "Qrius Store";
let balancePaisa = 250000;
const isKycVerified = true;

const amountPaisa = 150000;
const cashbackPaisa = amountPaisa * 0.02;

const canSend =
    balancePaisa >= amountPaisa &&
    isKycVerified &&
    amountPaisa > 0;

if (canSend) {
    balancePaisa = balancePaisa - amountPaisa;
}

console.log(`
Wallet            : ${merchantName}
KYC Verification  : ${isKycVerified ? "verified" : "not verified"}
Money Sent        : Rs ${(amountPaisa / 100).toFixed(2)}
Cashback          : Rs ${(cashbackPaisa / 100).toFixed(2)}
Total Amount      : Rs ${(balancePaisa / 100).toFixed(2)}
Approved          : ${canSend}
`);