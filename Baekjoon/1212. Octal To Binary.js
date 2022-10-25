const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const octal = input.split('').map(Number);
const zero = '0';
let answer = '';

for(let i = 0; i < octal.length; i++) {
    bin = octal[i].toString(2);
    
    if(i !== 0 && bin.length !== 3) {
        bin = zero.repeat(3 - bin.length) + bin;
    }
    answer += bin;
    bin = '';
}

console.log(answer);