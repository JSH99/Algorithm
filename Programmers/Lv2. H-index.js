function solution(citations) {
    let answer = [];
    let cnt = 0;
    let n = citations.length;
    
    if(citations.filter(e => 0 === e).length === n) {
        answer = 0;
    }
    else {
        for(let i = 0; i <= n; i++) {
            for(let j in citations) {
                if(i <= citations[j]) cnt++;
            }
            if(i <= cnt) answer = i; 
            cnt = 0;
        }
    }
    return answer;
}