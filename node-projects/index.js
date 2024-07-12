const fs = require("fs");

// Reading text from file
const data = fs.readFileSync("./essay.md");
console.log(data + "\n");

// Printing table of 5
for(let num = 1; num <= 10; num++){
    console.log(`5 * ${num} = ${num * 5}`);
}
