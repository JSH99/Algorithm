function solution(absolutes, signs) {
    var answer = 0;
    
    for(let n in absolutes) {
        signs[n] === true ? 
            answer += absolutes[n] : answer += absolutes[n] * (-1);
    }
    return answer;
}