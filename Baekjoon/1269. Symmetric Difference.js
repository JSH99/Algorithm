const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = new Set(input[1].split(' ').map(Number));
const B = new Set(input[2].split(' ').map(Number));
let union = new Set([...A, ...B]); // 합집합
let answer = 2 * union.size - (N + M);
console.log(answer);