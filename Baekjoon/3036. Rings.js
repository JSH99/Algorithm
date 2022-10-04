const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');
const N = parseInt(input[0]);
const rings = input[1].split(' ').map(x => Number(x));
let r = 0;
let answer = [];

const gcd = (a, b) => {
    while (b > 0) {
    let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

for(let i = 1; i < N; i++) {
    r = gcd(rings[0], rings[i]);
    answer.push(rings[0]/r + '/' + rings[i]/r);
}
console.log(answer.join('\n'));