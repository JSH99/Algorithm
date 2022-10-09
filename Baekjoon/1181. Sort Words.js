const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const N = parseInt(input[0]);
let words = [];

for(let i = 1; i <= N; i++) {
    words.push(input[i]);
}

let answer = Array.from(new Set(words)); // 중복 제거
answer.sort().sort((a,b) => a.length - b.length);
console.log(answer.join('\n'));