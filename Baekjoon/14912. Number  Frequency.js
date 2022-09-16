const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');
const n = parseInt(inputData[0]);
const k = parseInt(inputData[1]);
let str = '';
let count = 0;

for(let i = 1; i <= n; i++) {
    str = i.toString();
    for(let j = 0; j < str.length; j++) {
        if (parseInt(str[j]) === k){
            count++;
        }
    }
}
console.log(count);