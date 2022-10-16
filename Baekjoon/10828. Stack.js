const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const N = parseInt(input[0]);
let stack = [];
let answer = [];

for(let i = 1; i <= N; i++) {
    if(input[i].startsWith('push')) {
        stack.push(Number(input[i].split(' ')[1]));
    } else if(input[i] === 'pop') {
        answer.push(stack.length !== 0 ? stack.pop() : -1);
    } else if(input[i] === 'size') {
        answer.push(stack.length);
    } else if(input[i] === 'empty') {
        answer.push(stack.length === 0 ? 1 : 0);
    } else if(input[i] === 'top') {
        answer.push(stack.length !== 0 ? stack[stack.length - 1] : -1);
    }
}
console.log(answer.join('\n'));