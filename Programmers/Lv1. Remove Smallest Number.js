function solution(arr) {
    var answer = [];
    let min = Math.min.apply(null, arr);
    
    if (arr.length !== 1) {
        arr.splice(arr.indexOf(min), 1);
        answer = arr;
    } else {
        answer.push(-1);
    }
    
    return answer;
}