const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString();

const str = inputData.toUpperCase();
let count = new Array(26).fill(0);

for(let i = 0; i < str.length; i++) {
    count[str.charCodeAt(i) - 65] ++;
}

const max = Math.max.apply(null, count);
let answer = [];

for(let i = 0; i < count.length; i++) {
    if(count[i] === max) {
       answer.push(String.fromCharCode(i + 65));
    }
}

console.log(answer.length >= 2 ? '?' : answer[0]);