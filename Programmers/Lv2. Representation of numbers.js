function solution(n) {
    let sum = 0;
    let cnt = 0; 
    
    for(let i = 1; i <= n; i++) {
        for(let j = i; j <= n; j++) {
            sum += j;
            if(sum >= n) {
                sum === n ? cnt++ : null;
                sum = 0;
                break;
            }
        }
    }
    return cnt;
}