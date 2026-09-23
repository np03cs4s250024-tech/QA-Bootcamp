// Q25. Predict the Output (Event Loop)
// Task: Without running it, write down the exact order the following logs appear, then run it to confirm. Explain WHY in one sentence.



console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => console.log('C'));

console.log('D');


// Q26. Delay Function (Promise)
// Task: Write delay(ms) that returns a Promise which resolves after ms milliseconds. Then use it to log 'Hi' after 1 second.



function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

delay(1000).then(() => console.log("Hi"));


// Q27. Rewrite with async/await
// Task: Using your delay(ms) from Q26, write an async function run() that logs 'Start', waits 1 second, then logs 'End'.


function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    console.log("Start");

    await delay(1000);

    console.log("End");
}

run();

// Q28. Simulated Fetch
// Task: Write fetchUser(id) that returns a Promise resolving to { id, name: 'User' + id } after a 500ms delay. Consume it with async/await inside a getUser() function that logs the result.

function fetchUser(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: id,
                name: "User" + id
            });
        }, 500);
    });
}

async function getUser() {
    const user = await fetchUser(1);
    console.log(user);
}

getUser();



// Q29. Run in Parallel (Promise.all)
// Task: You have three fetchUser calls. Write loadAll() that runs them at the same time and returns an array of all three results. Measure that it takes ~500ms total, not 1500ms.

function fetchUser(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: id,
                name: "User" + id
            });
        }, 500);
    });
}

async function loadAll() {
    const users = await Promise.all([
        fetchUser(1),
        fetchUser(2),
        fetchUser(3)
    ]);

    return users;
}

loadAll().then(users => console.log(users));


// Q30. Handle a Rejection
// Task: Write riskyFetch() that returns a Promise which rejects with an Error('Network failed'). Then write a safe() async function that awaits it inside try/catch and logs the error message instead of crashing.
// Example:


// Q32. Retry with Recovery
// Task: Write retry(fn, times) that calls the async function fn. If it rejects, try again — up to 'times' total attempts. If all attempts fail, re-throw the last error.



function riskyFetch() {
    return new Promise((_, reject) => {
        reject(new Error("Network failed"));
    });
}

async function safe() {
    try {
        await riskyFetch();
    } catch (err) {
        console.log("Caught:", err.message);
    }
}

safe();


// Q31. Timeout Wrapper
// Task: Write withTimeout(promise, ms) that returns whichever settles first: the given promise, or a rejection with 'Timed out' after ms.


function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

function withTimeout(promise, ms) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject("Timed out");
        }, ms);
    });

    return Promise.race([promise, timeoutPromise]);
}

async function run() {
    try {
        await withTimeout(delay(3000), 1000);
        console.log("Completed");
    } catch (error) {
        console.log(error);
    }
}

run();


async function retry(fn, times) {
    let lastError;

    for (let attempt = 1; attempt <= times; attempt++) {
        try {
            const result = await fn();
            return result;
        } catch (error) {
            lastError = error;
            console.log(`Attempt ${attempt} failed`);
        }
    }

    throw lastError;
}

let attemptCount = 0;

async function flakyFetch() {
    attemptCount++;

    if (attemptCount < 3) {
        throw new Error("Network failed");
    }

    return "Fetch successful";
}

async function test() {
    try {
        const result = await retry(flakyFetch, 3);
        console.log(result);
    } catch (error) {
        console.log("Final error:", error.message);
    }
}

test();






//                     The Whole OutPut of Part3 IS 
// rosha@LAPTOP-NULK1VJ5 MINGW64 ~/Desktop/qrius-bootcamp.worktrees
// $ ls
// add-git-bash-integration/

// rosha@LAPTOP-NULK1VJ5 MINGW64 ~/Desktop/qrius-bootcamp.worktrees
// $ cd add-git-bash-integration

// rosha@LAPTOP-NULK1VJ5 MINGW64 ~/Desktop/qrius-bootcamp.worktrees/add-git-bash-integration (agents/add-git-bash-integration)
// $ ls
// AssessementPart1/  day1/  day2/  README.md  typescriptweek5/  week3/  week4/

// rosha@LAPTOP-NULK1VJ5 MINGW64 ~/Desktop/qrius-bootcamp.worktrees/add-git-bash-integration (agents/add-git-bash-integration)
// $ cd AssessementPart1

// rosha@LAPTOP-NULK1VJ5 MINGW64 ~/Desktop/qrius-bootcamp.worktrees/add-git-bash-integration/AssessementPart1 (agents/add-git-bash-integration)
// $ ls
// one.js  part2.js  Part3.js

// rosha@LAPTOP-NULK1VJ5 MINGW64 ~/Desktop/qrius-bootcamp.worktrees/add-git-bash-integration/AssessementPart1 (agents/add-git-bash-integration)
// $ node part3.js
// A
// D
// Roshanis 23
// C
// Caught: Network failed
// Attempt 1 failed
// Attempt 2 failed
// Fetch successful
// B
// { id: 1, name: 'User1' }
// [
//   { id: 1, name: 'User1' },
//   { id: 2, name: 'User2' },
//   { id: 3, name: 'User3' }
// ]
// Hi
// Timed out
// Timed out

// rosha@LAPTOP-NULK1VJ5 MINGW64 ~/Desktop/qrius-bootcamp.worktrees/add-git-bash-integration/AssessementPart1 (agents/add-git-bash-integration)
// $ 
// function getName(user){
//     let {name} = user;
//     return name;
// }

// let user = {
//     name : "roshan",
//     age : 23,
// }


// console.log(getName(user));

// let employee = {
//     id: 501,
//     name: "Roshan",
//     job: {
//         title: "QA Engineer",
//         department: "Automation",
//         location: {
//             city: "Kathmandu",
//             country: "Nepal"
//         }
//     },
//     skills: [
//         "JavaScript",
//         "TypeScript",
//         "Playwright",
//         "API Testing"
//     ],
//     projects: [
//         "Job Portal",
//         "Automation Framework",
//         "API Testing System"
//     ]
// };

// function getEmployeeDetails(employee) {

//     let {
//         id,
//         name,
//         job:{
//             title,
//             department,
//             location : {
//                 city,
//                 country
//             }
//         },
//         skills,
//         projects,
//     } = employee;
//     return `the ${id} is and ${name} and${title} and ${department} the ${city} with ${projects}`;

// }
// let result = getEmployeeDetails(employee)
// console.log(result);


// let user = {
//     name: "Roshan",
//     age: 23,
//     address: {
//         city : "kathmndu",
//         country: "Nepal"
//     }
// };

// function getCity(user) {

//    let {
//     name,
//     age,
//     address : {
//         city,
//         country
//     }

//    } = user;
//    return ` my ${name} is ${user?.name} where i ${user?.address?.city?? "siraha"}${country}`

// }
// let info = getCity(user);
// console.log(info);


// function updateUser(user){
//     return{
//         ...user,
//         role : "QA Engineer"
//     }
// }
// let user = {
//     nmae : "roshjan",
//     age : 23

// }
// console.log(updateUser(user));

// function meregNum(first , second){
//     return[...first,...second];
// }

// console.log(meregNum([1,2,3,4],[5,8,7,9]));


// function intro (name,age){
//     return`${name}is ${age}`
// }


// console.log(intro("Roshan", 23));


