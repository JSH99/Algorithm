function solution(arr) {
    var answer = 1;
    const gcd = (a, b) => {
      while (b > 0) {
        let temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    };
    const lcm = ((a, b) => (a * b) / gcd(a, b));
    
    for (let i = 0; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
      }
    return answer;
}