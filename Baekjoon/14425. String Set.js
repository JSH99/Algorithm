const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
let arrN = [];
let arrM = [];
let cnt = 0;

for(let i = 0; i < N; i++) {
    arrN.push(input[i+1]);
}

for(let j = 0; j < M; j++) {
    arrM.push(input[j+N+1]);
}

const set = new Set(arrN);

arrM.forEach((str => {
  if (set.has(str)) cnt++;
}))

console.log(cnt);