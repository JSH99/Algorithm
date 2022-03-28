function solution(strings, n) {
    var answer = [];
    var arr = [];

    // 기준 글자 맨 앞에 붙이기
    for(let s in strings) {
        arr.push(strings[s][n] + strings[s]);
    }
    
    // 정렬 후 맨 앞 글자 제거해서 출력
    arr.sort();
    
    for(let a in arr) {
        answer.push(arr[a].substr(1));
    }
    
    return answer;
}