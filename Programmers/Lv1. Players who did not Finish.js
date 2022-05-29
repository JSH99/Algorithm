function solution(participant, completion) {
    var answer = '';
    let part = {};
    let comp = {};
    
    for(let i of participant) {
        part[i] === undefined ? part[i] = 1 : part[i]++;
    }
    
    for(let j of completion) {
        comp[j] === undefined ? comp[j] = 1 : comp[j]++;
    }
    
    for(let n in part) {
        if(part[n] !== comp[n])
            answer = n;
    }
    
    return answer;
}