const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const map = new Map();
let answer = [];

for(let i = 0; i < n; i++) {
    map.set(input[i+1].split(' ')[0], input[i+1].split(' ')[1]);
}

for(let i = 0; i < k; i++) {
    answer.push(map.get(input[i+n+1]));
}

console.log(answer.join('\n'));