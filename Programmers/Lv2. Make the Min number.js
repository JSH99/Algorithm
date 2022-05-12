function solution(A,B){
    var answer = 0;
   
    A.sort((a, b) => a - b); // 오름차순 정렬
    B.sort((a, b) => b - a); // 내림차순 정렬

    for(let i in A) {
        answer += A[i] * B[i];
    }
    
    return answer;
}