const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
let words = new Set();

for(let i = 0; i < input.length; i++) {
    for(let j = i + 1; j <= input.length; j++) {
        words.add(input.substring(i, j))
    }
}
console.log(words.size);