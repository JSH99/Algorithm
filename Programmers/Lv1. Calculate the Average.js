function solution(arr) {
    let sum = 0;
    
    for(let n of arr) {
        sum += n;
    }
    
    return sum/arr.length;
}