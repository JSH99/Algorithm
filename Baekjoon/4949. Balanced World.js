const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
let stack = []; // LIFO
let answer = [];
let balance = true;

for(let i = 0; i < input.length; i++) {
    if(input[i] === '.') break;
    for(let j = 0; j < input[i].length; j++) {
        if(input[i][j] === '(' || input[i][j] === '[') {
            stack.push(input[i][j]);
        }
        else if(input[i][j] === ')') {
            if(stack[stack.length - 1] === '(') {
                stack.pop(); 
            } else {
                balance = false;
                break;
            }
        }
        else if(input[i][j] === ']') {
            if(stack[stack.length - 1] === '[') {
                stack.pop(); 
            } else {
                balance = false;
                break;
            }
        }
    }
    answer.push(stack.length !== 0 || !balance ? 'no' :'yes');
    stack = [];
    balance = true;
}
console.log(answer.join('\n'));