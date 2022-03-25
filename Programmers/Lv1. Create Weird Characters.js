function solution(s) {
    var answer = '';
    let arr = s.split(' ');

    for(let a = 0; a < arr.length; a++) {
        for(let n = 0; n < arr[a].length; n++) {
            n % 2 === 0 ?
                answer += arr[a][n].toUpperCase()
                : answer += arr[a][n].toLowerCase();
        }
        a === arr.length - 1 ? null : answer += ' ';
    }
    return answer;
}