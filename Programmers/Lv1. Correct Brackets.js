function solution(s){
    let answer = true;
    let cnt = 1;
    
    if(s[0] !== '\)') { // 1. left가 먼저인지
        for(let i = 1; i < s.length; i++) {
            s[i] === '\(' ? cnt++ : cnt--;
            if(cnt < 0) { // 2. left보다 right가 더 많은지
                answer = false;
                break;
            }
            if((i + 1) % 2 === 0 && cnt % 2 !== 0) { // 3. 짝수번째 cnt가 짝수인지
                answer = false;
                break;
            }
        }
        if(cnt !== 0) { // 4. cnt가 0인지(left = right인지)
             answer = false;
        } 
    } else {
        answer = false;
    }
    
    return answer;
}