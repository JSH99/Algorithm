function solution(s) {
    var answer = 0;
    s[0] === '-' ? answer = parseInt(s.slice(1)) * (-1) : answer = parseInt(s);
    return answer;
}