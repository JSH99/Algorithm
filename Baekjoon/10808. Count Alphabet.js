const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('');

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const count = new Array(26).fill(0);

inputData.forEach((i) => count[alphabet.indexOf(i)]++);
console.log(count.join(' '));