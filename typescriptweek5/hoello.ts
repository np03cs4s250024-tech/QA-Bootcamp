
// console.log("hello world");



// interface Box<T> {
//     value: T;
// }

// const NUMBERBox: Box<string> = {
//     value: "123"
// };

// console.log(NUMBERBox.value);
// *\

interface Payment  {
    id : string;
    amount : number;
    method : "eSewa" | "Khalt";
    status? : "Success" | "Failed" ;

}

function printPaymnet (Payment : Payment){
    console.log(`${payment.id}`)
}

let payment : Payment ={
    id : "poo1",
    amount : 250,
    method : "eSewa",
}
printPaymnet(payment);

