function solution(arr1, arr2) {
    let answer = [];
    let sum = 0;
    
    for(let r = 0; r < arr1.length; r++) {
        answer.push([]);
        for(let c = 0; c < arr2[0].length; c++) {
            sum = 0;
            for(let n = 0; n < arr2.length; n++) {
                sum += arr1[r][n] * arr2[n][c];
            }
            answer[r].push(sum);
        }
    }
        
        
    return answer;
}