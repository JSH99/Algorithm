const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');
const n = parseInt(inputData[0]);
const arr = inputData[1].split(' ').map(x => Number(x));
let answer = [];

arr.sort((a,b) => a - b);

for(let i = 0; i < n; i++) {
    if(!answer.includes(arr[i])) {
        answer.push(arr[i]);
    }
}

console.log(...answer);