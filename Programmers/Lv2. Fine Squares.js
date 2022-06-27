function solution(w, h) {
    let answer = 1;
    const gcd = (a, b) => {
        while (b > 0) {
          let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };
    // 가로 + 세로 - 최대공약수
    answer = w * h - (w + h - gcd(w, h));
    return answer;
}