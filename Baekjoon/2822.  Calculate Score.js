const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString();
const num = input.split('\n').map(x => Number(x));;
let obj = {};
let total = 0;

for(let i = 0; i < num.length; i++) {
    obj[i + 1] = num[i];
}

let sorted = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
let result = sorted.splice(0, 5).sort((n, m) => n - m);

for(let i = 0; i < 5; i++) {
    total += obj[result[i]];
}

console.log(total);
console.log(result.join(' '));