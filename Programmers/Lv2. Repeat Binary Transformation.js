function solution(s) {
    let answer = [];
    let n = 0;
    let cnt = 0;
    let str = '';
    
    while(true) {
        for(let i in s) {
            s[i] === '0' ? cnt++ : str += s[i];
        }
        n++;
        s = parseInt(str.length).toString(2);
        if(s === '1')
            break;
        str = '';
    }
    answer.push(n, cnt);

    return answer;
}