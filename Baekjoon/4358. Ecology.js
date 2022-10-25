const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const n = input.length;
let trees = {}

for(let i = 0; i < n; i++) {
    trees[input[i]] === undefined ? trees[input[i]] = 1 : trees[input[i]]++;
}

let result = Object.keys(trees).sort()
    .map((tree) => `${tree} ${((trees[tree] / n) * 100).toFixed(4)}`)
    .join('\n');

console.log(result);