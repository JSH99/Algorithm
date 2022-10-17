const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
let listen = new Set();
let watch = new Set();
let answer = [];

for(let i = 1; i <= N + M; i++) {
    i <= N ? listen.add(input[i]) : watch.add(input[i]);
}

watch.forEach(p => {
    if(listen.has(p))
        answer.push(p);
})
 
console.log(answer.length);
console.log(answer.sort().join('\n'));