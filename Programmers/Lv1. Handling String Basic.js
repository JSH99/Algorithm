function solution(s) {
    var answer = true;

    if(s.length === 4 || s.length === 6) {
        for(let i in s) {
            if(s.charCodeAt(i) > 57) {
                answer = false;
                break;
            }
        }
    } else {
        answer = false;
    }

    return answer;
}