const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const N = parseInt(input[0]);
let cnt = 0;

for(let i = 1; i <= N; i++) {
    for(let j = 0; j < input[i].length; j++) {
        input[i][j] === '(' ? cnt++ : cnt--;
        if(cnt < 0) break;
    }
    console.log(cnt === 0 ? 'YES' : 'NO');
    cnt = 0;
}