function solution(numbers) {
    var answer = [];
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            answer.includes(numbers[i] + numbers[j]) ?
               null : answer.push(numbers[i] + numbers[j]);
        }
    }
    
    answer.sort(function(a, b) {
      return a - b;
    });
    
    return answer;
}