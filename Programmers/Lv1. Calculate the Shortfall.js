function solution(price, money, count) {
    let sum = 0;
    let answer;

    for(let n = 1; n <= count; n++) {
        sum += price * n;
    }
    
    sum > money ? answer = sum - money : answer = 0;
        
    return answer;
}