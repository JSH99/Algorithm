const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const [N, postfix, ...nums] = input;
const number = nums.map(Number);
let str2num = {};
let stack = [];
let result = 0;

for(let i = 0; i < N; i++) {
    const alphabet = String.fromCharCode(65 + i);
    str2num[alphabet] = number[i];
}

function calculate(operator, n1, n2) {
    switch (operator) {
        case '+':
            return n1 + n2;
            break;
        case '-':
            return n1 - n2;
            break;
        case '*':
            return n1 * n2;
            break;
        case '/':   
            return n1 / n2;
    }      
}

for(i = 0; i < postfix.length; i++) {
    if(postfix.charCodeAt(i) >= 65 && postfix.charCodeAt(i) <= 90) {
        stack.push(str2num[postfix[i]]);
    } else { // 연산자
        const n2 = stack.pop();
        const n1 = stack.pop();
        const operator = postfix[i];
        result = calculate(operator, n1, n2);
        stack.push(result);
    }
}

console.log(result.toFixed(2));