function solution(d, budget) {
    let answer = 0;
    let sum = 0;
    
    d.sort((a, b) => a - b);
    
    for(let i = 0; i < d.length; i++) {
        sum += d[i];
        console.log(i, sum)
        if(sum > budget) {
            answer = i;
            break;
        } else {
            answer = d.length;
        }
    }
    return answer;
}