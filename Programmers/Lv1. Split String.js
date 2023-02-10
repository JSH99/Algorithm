function solution(s) {
    let answer = 0;
    let x = s[0];
    let countX = 0;
    let countOther = 0;

    for(let i = 0; i < s.length; i++) {
        s[i] === x ? countX++ : countOther++;

        if(i === s.length - 1 && countX !== 0 ) {
            answer++;
            break;
        }

        if(countX === countOther) {
            answer++;
            countX = 0;
            countOther = 0;
            x = s[i+1];
            console.log(x);
        }
    }

    return answer;
}