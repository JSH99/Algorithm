const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');
const n = parseInt(inputData[0]);
let num = [];
let sum = 0;

for(let i = 0; i < n; i++) {
    let value = parseInt(inputData[i+1]);
    value == 0 ? num.pop() : num.push(value);
}

for(let k = 0; k < num.length; k++) {
    sum += num[k];
}

console.log(sum);