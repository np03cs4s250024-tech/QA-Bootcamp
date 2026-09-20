class InvalidTransactionError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidTransactionError";
    }
}

const transactions = [
    { id: 1, symbol: "NABIL", type: "BUY", qty: 10, price: 512 },
    { id: 2, symbol: "ADBL", type: "SELL", qty: 5, price: 240 },
    { id: 3, symbol: "NABIL", type: "BUY", qty: 8, price: 505 },
    { id: 4, symbol: "HDL", type: "SELL", qty: 12, price: 630 },
    { id: 5, symbol: "ADBL", type: "BUY", qty: 20 }
];

function createLabels(...trades) {
    return trades.map(({ id, symbol, type }) =>
        `#${id} ${symbol} ${type}`
    );
}

function validateTransaction(transaction) {
    const { id, symbol, type, qty, price } = transaction;

    if (!id || !symbol || !type || !qty) {
        throw new InvalidTransactionError(
            `Transaction ${id ?? "unknown"}: required data is missing`
        );
    }

    if (price == null) {
        throw new InvalidTransactionError(
            `Transaction ${id}: price is missing`
        );
    }

    if (price <= 0) {
        throw new InvalidTransactionError(
            `Transaction ${id}: price must be greater than 0`
        );
    }

    return true;
}

const copiedTransactions = [...transactions];

const labels = createLabels(...copiedTransactions);

const buyTransactions = transactions
    .filter(({ type }) => type === "BUY");

const firstNabilTrade = transactions
    .find(({ symbol }) => symbol === "NABIL");

const totalValue = transactions
    .reduce(
        (total, { qty, price }) =>
            total + qty * (price ?? 0),
        0
    );

const totalSpentOnBuys = buyTransactions
    .reduce(
        (total, { qty, price }) =>
            total + qty * (price ?? 0),
        0
    );

const missingPriceTransaction = transactions
    .find(({ price }) => price == null);

const missingPrice = missingPriceTransaction?.price ?? "N/A";

const allTransactionsHavePositiveQuantity = transactions
    .every(({ qty }) => qty > 0);

const hasHighValueTrade = transactions
    .some(({ qty, price }) => qty * (price ?? 0) > 5000);

const symbols = transactions
    .map(({ symbol }) => symbol);

const hasNabil = symbols.includes("NABIL");

console.log(`1) Trade labels: ${labels.join(" | ")}`);

console.log(`2) BUY count: ${buyTransactions.length}`);

console.log(
    `3) First NABIL trade id: ${firstNabilTrade?.id ?? "N/A"}`
);

console.log(`4) Total value of all trades: Rs ${totalValue}`);

console.log(
    `5) #${missingPriceTransaction?.id ?? "N/A"} ${missingPriceTransaction?.symbol ?? "N/A"}: Rs ${missingPrice}`
);

try {
    for (const transaction of transactions) {
        validateTransaction(transaction);
    }

    console.log("6) All transactions are valid");
} catch (error) {
    if (error instanceof InvalidTransactionError) {
        console.log(`6) #5 INVALID -> ${error.message}`);
    } else {
        console.log(`6) UNEXPECTED ERROR -> ${error.message}`);
    }
}

console.log(`Bonus) Total spent on BUY trades: Rs ${totalSpentOnBuys}`);

console.log(
    `Every transaction has a positive quantity: ${allTransactionsHavePositiveQuantity}`
);

console.log(
    `At least one trade is worth more than Rs 5000: ${hasHighValueTrade}`
);

console.log(
    `NABIL is included in the traded symbols: ${hasNabil}`
);