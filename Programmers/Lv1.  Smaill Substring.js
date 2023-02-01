function solution(t, p) {
    let answer = 0;
    const length = p.length;

    for(let i = 0; i < t.length - length + 1; i++) {
        const part = t.substr(i, length);

        if(parseInt(part) <= parseInt(p))
            answer++;
    }

    return answer;
}