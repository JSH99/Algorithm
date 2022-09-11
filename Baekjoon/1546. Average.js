const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');
const n = parseInt(inputData[0]);
const arr = inputData[1].split(' ').map(x => Number(x));;

const M = Math.max.apply(null, arr);
let score = 0;

for(let i = 0; i < n; i++) {
    score += (arr[i] / M * 100);
}

console.log(score/n);