const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const n = parseInt(input[0]);
let obj = {};
let ex = '';

for(let i = 1; i <= n; i++) {
    ex = input[i].split('.').pop();
    obj[ex] === undefined ? obj[ex] = 1 : obj[ex]++;
}

const keys = Object.keys(obj).sort();

for(i = 0; i < keys.length; i++) {
    console.log(keys[i] + ' ' + obj[keys[i]]);
}