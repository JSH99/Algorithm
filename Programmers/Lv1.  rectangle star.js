process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let s = '';
    
    for(let i = 0; i < a; i++) {
        s += '*';
    }
    for(let j = 0; j < b; j++) {
        console.log(s);
    }
    
    // 다른 사람의 풀이 - repeat 함수 사용
    console.log((('*').repeat(a)+'\n').repeat(b))
});