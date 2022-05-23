function solution(brown, yellow) {
    let answer = [];
    let total = brown + yellow;
    let h = 0;
    let w = 0;
    
    for(let i = 3; i < total; i++) {
        if(total % i === 0) {
            h = i;
            w = total / i;
            if((h - 2) * (w - 2) === yellow) {
                break;
            }
        }
    }
    answer.push(w, h);
    return answer;
}