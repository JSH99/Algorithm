const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const N = parseInt(input[0]);
let people = [];

for (let i = 1; i <= N; i++) {
  people.push(input[i].split(' '));
}

people.sort((a,b) => a[0] - b[0]);

for(let i = 0; i < N; i++) {
    console.log(people[i].join(' '));
}