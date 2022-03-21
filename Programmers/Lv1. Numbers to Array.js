function solution(n) {
    var answer = [];
    answer = String(n).split('').reverse().map((v) => parseInt(v));
    return answer;
}