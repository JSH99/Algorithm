const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');

const n = parseInt(inputData[0]);
const arr = inputData[1].split(' ').map(x => Number(x));;

min = Math.min.apply(null, arr);
max = Math.max.apply(null, arr);

console.log(min, max);