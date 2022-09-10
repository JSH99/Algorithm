const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
const C = parseInt(inputData[2]);
const result = A * B * C;
let count = new Array(10).fill(0);

result.toString().split('').forEach((i) => count[i]++);
console.log(count.join('\n'));