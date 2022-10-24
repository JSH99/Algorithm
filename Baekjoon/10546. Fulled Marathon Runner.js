const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const n = parseInt(input[0]);
let participation = {};
let completion = {};
let result = '';

for(let i = 1; i < 2*n; i++) {
    if(i <= n) {
        participation[input[i]] === undefined ? participation[input[i]] = 1 : participation[input[i]]++;
    } else {
        completion[input[i]] === undefined ? completion[input[i]] = 1 : completion[input[i]]++;
    }
}

for(const key in participation) {
    if(participation[key] !== completion[key])
        result = key;
}

console.log(result);