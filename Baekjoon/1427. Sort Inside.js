const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString();

let arr = inputData.toString().split('').sort((a,b) => b - a);
let result = arr.join('');

console.log(Number(result));