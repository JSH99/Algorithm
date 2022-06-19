function solution(n) {
    var answer = 1;
    var bool = false; // 소수인가?

    while(n > 2) {
        if(n % 2 === 0) {
            n--;
            continue;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if(n % i === 0) {
                bool = false
                break;
            } else {
                bool = true;
            }
        }
        if(bool === true) answer++;
        n--;
    }

    return answer;
}