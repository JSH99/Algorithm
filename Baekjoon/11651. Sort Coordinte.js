const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');
const n = parseInt(input.shift());
let arr = [];

for(let i = 0; i < n; i++){
    arr.push(input[i].split(' ').map(x => Number(x)));
}

arr.sort((a,b) => {
    if(a[1] === b[1]){
        return a[0] - b[0]
    } else {
        return a[1] - b[1]
    }
});

let result = [];

for(let i = 0; i < n; i++){
    result.push(arr[i].join(' '));
}

console.log(result.join('\n'));