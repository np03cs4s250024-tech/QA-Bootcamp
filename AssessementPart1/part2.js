// Q13. Swap with Destructuring
// Task: Write swap(a, b) that returns [b, a] using array destructuring — without a temporary variable.


function swap(a, b) {
    [a, b] = [b, a];
    return [a, b];
}

let result = swap(1, 2);
console.log(result);


// Q14. Extract from Object
// Task: Given a user object, write a function that uses object destructuring to pull out name and email and return a template-literal string.



function data(user) {
    const { name, email } = user;
    return `${name} can be reached at ${email}`;
}

const u = {
    name: "Roshan",
    email: "roshan@gmail.com",
    age: 23
};

console.log(data(u));

//  Q15. Merge with Spread
// Task: Write merge(obj1, obj2) that returns a new object combining both, where obj2's values win on conflicts. Do not mutate the inputs.

function merge(obj1,obj2){
    return {...obj1,...obj2};
}

let combine = merge({ a: 1, b: 2 }, { b: 9, c: 3 });
console.log(combine);



// Q16. Sum All (rest parameters)
// Task: Write sumAll(...nums) that accepts any number of arguments and returns their sum.



function sumAll(...num){
    return num.reduce((sum , num) => sum + num ,0);
}

let sumResult = sumAll(78,45,63,49,56);
console.log(sumResult);


// Q17. Safe Nested Access (optional chaining)
// Task: Write getCity(user) that returns the user's city from user.address.city, or 'Unknown' if any part is missing.

let user = {
    address : {
        city : "siraha",

    }
}

console.log(user.address.city);


let info ={
    student:{
        naam : "",
    }
}

console.log(user?.student?.naam?? "Roshan");


// Q18. Double the Array (map)
// Task: Write doubleAll(arr) that returns a NEW array with every number doubled. Use .map().

function totalAll(...nums){
    return nums.map(( nums) => nums*2 );

}

 newArr= totalAll(1,2,3,4,5,6);
console.log(newArr);


// Q19. Filter Adults (filter)
// Task: Given an array of people objects, write getAdults(people) returning only those with age >= 18. Use .filter().

function getAdult(people){
    return people.filter(p => p.age >=18);
}
 let people = [
    {name : "roshan", age : 23},
    {name : "ram", age : 21},
    {name : "roshani", age : 29},
    {name : "rohan", age : 13},
 ];

 let adult = getAdult(people);
 console.log(adult);


//  Q20. Total Price (reduce)
// Task: Given an array of items each with a price, write totalPrice(items) returning the sum of all prices. Use .reduce().


let items = [
    { price: 10 },
    { price: 5 },
    { price: 20 }
];
function totalPrice(items) {
    return items.reduce((sum ,items) => sum + items.price , 0);

}


let total = totalPrice(items);
console.log(total);


// Q21. Find a User (find)
// Task: Write findById(users, id) that returns the first user object whose id matches, or undefined. Use .find().

let Id = [
    {id : 1},
    {id : 2},
    {id : 3},
    {id : 4},
]

function getId(users, id){
    return users.find(u => u.id === id);
}
 let holder = getId(Id, 2);
 console.log(holder);

// Q22. Chained Pipeline (map + filter + reduce)
// Task: Given an array of numbers, return the sum of the squares of only the even numbers.

function sumEvenSquares(numbers){
    return numbers
    .filter(num => num % 2 === 0)
    .map(num => num * num)
    .reduce((sum , num) => sum + num ,0);

}
let outPut = sumEvenSquares([1,2,3,4,5]);
console.log(outPut);


// Q23. Safe JSON Parse (try/catch/finally)
// Task: Write safeParse(str) that returns the parsed object, or null if the string is invalid JSON. Log 'done' in a finally block either way.

function safeParse(str) {
    try {
        return JSON.parse(str);
    } catch (error) {
        return null;
    } finally {
        console.log("done");
    }
}

console.log(safeParse('{"a":1}'));
console.log(safeParse("not json"));

// Q24. Custom Error Class
// Task: Create a class ValidationError that extends Error. Write validateAge(age) that throws a ValidationError with message 'Age must be positive' when age < 0, otherwise returns age.


class ValidationError extends Error {
    constructor(msg) {
        super(msg);
        this.name = "ValidationError";
    }
}

function validateAge(age) {
    if (age < 0) {
        throw new ValidationError("Age must be positive");
    }

    return age;
}

try {
    console.log(validateAge(25));
    console.log(validateAge(-3));
} catch (err) {
    console.log(err.name);
    console.log(err.message);
}


                            // This is a OuTpuT of all code   Part2


//    rosha@LAPTOP-NULK1VJ5 MINGW64 ~/Desktop/qrius-bootcamp.worktrees/add-git-bash-integration/AssessementPart1 (agents/add-git-bash-integration)
// $ node part2.js
// [ 2, 1 ]
// Roshan can be reached at roshan@gmail.com
// { a: 1, b: 9, c: 3 }
// 291
// siraha
// Roshan
// [ 2, 4, 6, 8, 10, 12 ]
// [
//   { name: 'roshan', age: 23 },
//   { name: 'ram', age: 21 },
//   { name: 'roshani', age: 29 }
// ]
// 35
// { id: 2 }
// 20
// done
// { a: 1 }
// done
// null
// 25
// ValidationError
// Age must be positive

// rosha@LAPTOP-NULK1VJ5 MINGW64 ~/Desktop/qrius-bootcamp.worktrees/add-git-bash-integration/AssessementPart1 (agents/add-git-bash-integration)
// $                          
