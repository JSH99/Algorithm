function solution(arr1, arr2) {
    var answer = [[]];
    
    for (let r = 0; r < arr1.length; r++){
        answer[r] =[];
        for(let c = 0; c < arr1[r].length; c++){
            answer[r][c] = arr1[r][c] + arr2[r][c];
        }
    }
    return answer;
}