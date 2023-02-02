function solution(s) {
    let answer = [];
    let obj = {};
    let num = -1;

    for(let i = 0; i < s.length; i++) {
        num = (obj[s[i]] === undefined ? -1 : i - obj[s[i]]);
        obj[s[i]] = i;
        answer.push(num);
    }

    return answer;
}