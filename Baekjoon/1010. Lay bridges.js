const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const k = parseInt(input[0]);
let answer = [];

function factorial(n) {
    let num = 1;
    for(let i = 1; i <= n; i++)
        num *= i;
    return num;
}

for(let i = 1; i <= k; i++) {
    let [n, m] = input[i].split(' ').map(Number);
    answer.push(Math.round(factorial(m) / (factorial(n) * factorial(m - n))));
}

console.log(answer.join('\n'));