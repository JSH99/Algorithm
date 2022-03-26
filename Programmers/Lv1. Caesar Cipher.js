function solution(s, n) {
    var answer = '';

    for(let i in s) {
        let code = s.charCodeAt(i) + n;

        if (s[i] >= 'A' && s[i] <= 'Z') {
            code > 90 ?
                answer += String.fromCharCode(code - 26)
                : answer += String.fromCharCode(code);
        }
        else if (s[i] >= 'a' && s[i] <= 'z') {
            code > 122 ?
                answer += String.fromCharCode(code - 26)
                : answer += String.fromCharCode(code);
        }
        else {
            answer += ' ';
        }

    }
    return answer;
}