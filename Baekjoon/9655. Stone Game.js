const fs = require('fs');
const N = fs.readFileSync(0, 'utf8').toString().trim();

console.log(parseInt(N) % 2 === 0 ? 'CY' : 'SK');