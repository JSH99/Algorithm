const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();
const [N, K] = input.split(' ').map(Number);
let queue = [];
let answer = [];
let cnt = 1;

for(let i = 1; i <= N; i++) {
    queue.push(i);
}

while(queue.length) {
    // 큐에서 1개씩 꺼낸 후 
    const shiftItem = queue.shift();
    // k번째라면 정답에, 아니면 다시 큐에 push 
    cnt % K === 0 ? answer.push(shiftItem) : queue.push(shiftItem);
    cnt++;
}

console.log('<' + answer.join(', ') + '>');