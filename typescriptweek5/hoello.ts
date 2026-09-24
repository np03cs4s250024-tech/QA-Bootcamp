
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



// both parameters are now labelled as numbers
function withFee(amount: number, fee: number) {
  // now "+" can only mean number addition here
  return amount + fee;
}

// passing text is rejected before the file runs
withFee(50000, 100);
// Argument of type 'string' is not
// assignable to parameter of type 'number'.


// // plain JavaScript, pasted straight into a .ts file
// // make an object with a name and a balance
// const user = { name: "Sita", balance: 2500 };
// // an arrow function that builds a greeting string
// const greet = (name) => `Namaste, ${n}`;
// // call it and print the result
// console.log(greet(user.name));





