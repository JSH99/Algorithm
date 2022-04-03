function solution(left, right) {
    var answer = 0;
    var cnt;
    
    for(let i = left; i <= right; i++) {
        cnt = 0;
        // 각 숫자마다 약수 개수 구하기
        for(let n = 1; n <= i; n++) {
            i % n === 0 ? cnt++ : null;
        }
        // 약수 개수 짝수 ? += : -=; 
        cnt % 2 === 0 ? answer += i : answer -= i;
    }
    
    return answer;
}