function solution(numbers) {
    var answer = 0;
    
    for(let n = 0; n < 10; n++) {
        numbers.includes(n) ? null : answer += n;
    }
    return answer;
}