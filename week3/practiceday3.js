// const name = "Roshan";
//  let age = 23;
// console.log(name);
// console.log(`My name is ${name}, I am ${age} old`);



// const price = 500;
// const quantity = 3;

// console.log(`Total price is Rs. ${price * quantity}`);

// const message = `
// hello roshan,
// your payment is sucessfull
// thank you!`

// console.log(message);


// let item = "Laptop";
// let paid = 50000;

// const passed = true;

// const report = `
// Item : ${item}
// Paid : ${paid}
// `;

// const status = `Test ${passed ? "PASSED" : "FAILED"}`;

// console.log(status);



// const  array = ["esaba"," Khalti","Ime pay"];

// const [moblie ,bank,Ime]=array;
//     console.log(moblie);
//     console.log(bank);
//     console.log(Ime);



    // const user = {
    //     name : "Roshan",
    //     age : 23,
    //     email : "roshan@example.com"
    // };

    // const {name ,age ,email, } = user;
    // console.log(name);
    // console.log(age);
    // console.log(email);


    // const stock = {
    //     symbol : "AAPL",
    //     price : 150,
    //     qty : 1000
    // };
    // const {price : unitprice , qty : quantity} = stock;

    
    // console.log(unitprice);
    // console.log(quantity);


    // const  number = [10,20,30,40,50];
    // const info = [...number];

    // const data = [5,2, ...number , 60,70];
    //  console.log(data);
    //  console.log(info);



// const infos = {
//     name: "Roshan",
//     age: 23,
//     email: "roshan@example.com"
// };

// const newInfo = {
//     ...infos,
//     name: "John",
//     age: 30,
//     email: "john@example.com"
// };

// console.log(newInfo);



// const number = [10, 20, 30, 40, 50];
// const [first,...rest] = number;
// console.log(first);
// console.log(rest);




// const user = {
//     name: "Roshan",
//     address: {
//         city: "Kathmandu"
//     }
// };

// console.log(user.address?.city);


// const users = {
//     name: "Roshan"
// };

// console.log(users.address?.city);

// const userrs = {
//     name: "Roshan"
// };

// const city = userrs.address?.city ?? "Unknown";

// console.log(city);


// const price = [200, 300, 400, 500];
// const double = price.map(price => price+782);
// console.log(double);

// const user = [
//     {name : "roshan" , age : 23},
//     {name : "sita" , age : 21},
//     {name : "gita" , age : 25}
// ];

// const data = user .map(user => ({ name: user.name, age: user.age }));
// const datas = user.filter(user => user.age > 21);
// const newprice = price.filter(price => price >300);

// const finder = price.find(price => price >300);
// console.log(newprice);
// console.log(finder);

// console.log(data);
// console.log(datas);


// const users = [
//     { name: "Roshan", active: true },
//     { name: "John", active: false },
//     { name: "Ram", active: true }
// ];

// const activeUsers = users.filter(users => users.active);
// console.log(activeUsers);


// const usersers = [
//     { id: 1, name: "Roshan" },
//     { id: 2, name: "John" }
// ];

// const datasa = users.find(user => user.id === 10);

// console.log(datasa);

// const prices = [100, 200, 300];

// const total = prices.reduce((sum, price) => sum + price, 0);

// console.log(total);


// const prices = [512, 240, 130];
// const result = prices.every(p => p > 0);
// const results = prices.some(p => p > 500);
// const resultes = prices.includes(240);

// console.log(result);
// console.log(results);
// console.log(resultes);



// try {
//     const user = null;
//     console.log(user.name);
// } catch (error) {
//     console.log("Something went wrong");
    
// }


try {
    const user = null;
    console.log(user.name);
} catch (error) {
    console.log(error);
}



try {
    console.log("Starting test");
} catch (error) {
    console.log("Test failed");
} finally {
 
    console.log("Test finished");
}



try {
    const age = 15;

    if (age < 18) {
        throw new Error("User must be 18 or older");
    }

    console.log("User accepted");
} catch (error) {
    console.log(error.message);
}



try {
    if (amount > balance) {
        throw new Error("Insufficient balance");
    }

    console.log("Payment successful");
} catch (error) {
    console.log(`Payment failed: ${error.message}`);
}


try {
    const username = "Roshan";
    const password = "wrong";

    if (password !== "correct") {
        throw new Error("Invalid password");
    }

    console.log("Login test passed");
} catch (error) {
    console.log(`Login test failed: ${error.message}`);
}


