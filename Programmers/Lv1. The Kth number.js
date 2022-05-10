function solution(array, commands) {
    let temp = [];
    let ans = [];
    
    // command 수 만큼 반복
    // 배열 index 0부터 시작함 주의
    for(let n in commands) {
        // 1. i ~ j 자르고 정렬
        temp = array.slice(commands[n][0] - 1, commands[n][1]); 
        temp.sort((a,b) => a - b);
        
        // 2. 새 배열의 k 번째 숫자 배열 추가
        ans.push(temp[commands[n][2] - 1]);
        }
        
    return ans;
}