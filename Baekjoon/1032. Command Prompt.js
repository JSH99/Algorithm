const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split('\n');
const n = parseInt(inputData[0]);
let arr = [];
let bool = false;
let answer = '';

for(let i = 0; i < n; i++) {
    arr.push(inputData[i+1]);
}

for(let i = 0; i < arr[0].length; i++) {
    for(let j = 0; j < n; j++) {
        if(arr[0][i] !== arr[j][i]) {
            bool = false;
            answer += '?';
            break;
        } else {
            bool = true;
        }
    }
    if(bool === true)
        answer += arr[0][i];
}
console.log(answer);