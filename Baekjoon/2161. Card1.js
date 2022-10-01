const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString();
const N = parseInt(input);
let arr = [];
let answer = [];

for(let i = 1; i <= N; i++) {
    arr.push(i);
}

while(arr.length > 1) {
    answer.push(arr.shift());
    arr.push(...arr.splice(0, 1));
}

answer.push(...arr);
console.log(answer.join(' '));