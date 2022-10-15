const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString();
const K = parseInt(input);
let A = [1, 0];
let B = [0, 1];

for(let i = 2; i <= K; i++) {
    A.push(A[i-1]+A[i-2]);
    B.push(B[i-1]+B[i-2]);
}

console.log(A[K], B[K]);