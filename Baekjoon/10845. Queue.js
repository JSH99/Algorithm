const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const n = parseInt(input[0]);
let queue = [];
let answer = [];

for(let i = 1; i <= n; i++) {
    switch (input[i]) {
        case 'pop':
            answer.push(queue.length !== 0 ? queue.shift() : -1);
            break;
        case 'size':
            answer.push(queue.length);
            break;
        case 'empty':
            answer.push(queue.length === 0 ? 1 : 0);
            break;
        case 'front':
            answer.push(queue.length !== 0 ? queue[0] : -1);
            break;
        case 'back':
            answer.push(queue.length !== 0 ? queue[queue.length - 1] : -1);
            break;
        default:
            queue.push(Number(input[i].split(' ')[1]));
    }
}
console.log(answer.join('\n'));