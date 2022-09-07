const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString();
const n = parseInt(inputData);
let answer = '';

for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        answer += '*';
    }
    answer += '\n';
}
console.log(answer);