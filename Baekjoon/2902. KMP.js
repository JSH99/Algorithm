const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString();
const str = input.split('-');
let short = '';

for(let i = 0; i < str.length; i++) {
    short += str[i][0];
}
console.log(short);