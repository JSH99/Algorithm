const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');
const n = parseInt(input[0]);
const birth = [];
let date = [];
let name = [];

for (let i = 1; i <= n; i++) {
  birth.push(input[i].split(' ').reverse());
}

for (let i=0; i<n; i++){
  if (birth[i][1].length === 1) birth[i][1] = '0' + birth[i][1];
  if (birth[i][2].length === 1) birth[i][2] = '0' + birth[i][2];
}

for(i = 0; i < n; i++) {
    date.push(parseInt(birth[i].slice(0,3).join('')));
    name.push(birth[i][3])
}
console.log(name[date.indexOf(Math.max(...date))]);
console.log(name[date.indexOf(Math.min(...date))]);