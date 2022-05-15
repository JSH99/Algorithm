function solution(n) {
    let answer = n;
    let cnt = n.toString(2).split('').filter(element => '1' === element).length;
    
    while(true) {
        answer++;
        ncnt = answer.toString(2).split('').filter(element => '1' === element).length;
        if(cnt === ncnt) {
            break;   
        }
    }
    return answer;
}