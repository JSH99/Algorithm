const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
let arr = [];

for(let i = 1; i <= input.length; i++) {
    arr.push(input.split('').splice(-i).join(''));
}

console.log(arr.sort().join('\n'));