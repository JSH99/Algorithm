function solution(n) {
    var answer = '';
    let i = 3;
    
    while(n > 0) {
        if(n % i === 1) {
            answer += 1;
            n = parseInt(n / i); 
        } else if(n % i === 2) {
            answer += 2;
            n = parseInt(n / i); 
        } else if(n % i === 0) {
            answer += 4;
            n = parseInt(n / i) - 1; 
        }  
    }
    answer = answer.split('').reverse().join('');
    
    return answer;
}