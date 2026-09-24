function getfirst<T>(item: [T, ...T[]]): T {
    return item[0];

}
const firstNumber = getfirst([10,20,30]);

const firstName = getfirst(["Roshan","Ram","Rahul"]);

console.log(firstNumber);
console.log(firstName);