// Topic-1: Nested Loops
console.log(`\n Topic-1`);
for (let i = 1; i <= 5; i++) {
    console.log(`Outer Loop ${i}`); // Logs the current iteration of the outer loop
    for (let j = 1; j <= 5; j++) {
        // Logs the multiplication of i and j for each inner loop iteration
        console.log(i + "*" + j + " = " + i * j); 
    }
}

// Topic-2: Loop through an Array
console.log(`\n Topic-2`);
let MYarray = ["Flash", "Batman", "Goku"];
for (let index = 0; index < MYarray.length; index++) {
    const element = MYarray[index]; // Access each element in the array
    console.log(element); // Logs each character name in the array
}

// Break and Continue

// Topic-3: Break Statement Example
console.log(`\n Topic-3 - Break Example`);
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5"); // Logs when index is 5
        break; // Breaks the loop when index equals 5
    }
    console.log(`Value of i is ${index}`); // Logs the current value of index until 5
}

// Topic-3: Continue Statement Example
console.log(`\n Topic-3 - Continue Example`);
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5"); // Logs when index is 5
        continue; // Skips the rest of the loop iteration when index equals 5
    }
    console.log(`Value of i is ${index}`); // Logs the current value of index, except when it's 5
}
