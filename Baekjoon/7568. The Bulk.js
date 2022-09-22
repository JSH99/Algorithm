const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');
const n = parseInt(input[0]);
let person = [];
let rank = [];
let cnt = 0;

for(let i = 1; i <= n; i++) {
    person.push(input[i].split(' ').map(Number));
}

for(i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if (person[i][0] < person[j][0] && person[i][1] < person[j][1]) {
            cnt++;
        }
    }
    rank.push(cnt + 1);
    cnt = 0;
}

console.log(rank.join(' '));