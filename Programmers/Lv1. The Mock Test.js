function solution(answers) {
    let answer = [];
    let cnt = { 1 : 0, 2 : 0, 3 : 0 }
    let one = [1, 2, 3, 4, 5];
    let two = [2, 1, 2, 3, 2, 4, 2, 5];
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let n1 = 0, n2 = 0, n3 = 0;
    
    for(let i in answers) {
        if(answers[i] === one[n1]) cnt[1]++;
        if(answers[i] === two[n2]) cnt[2]++;
        if(answers[i] === three[n3]) cnt[3]++;
        n1++;
        n2++;
        n3++;
        if(n1 >= one.length) n1 %= one.length; 
        if(n2 >= two.length) n2 %= two.length; 
        if(n3 >= three.length) n3 %= three.length;
    }
    
    let max = Math.max.apply(null, Object.values(cnt));
    for(let i in cnt) {
        if(max === cnt[i]) answer.push(parseInt(i));
    }    
    return answer;
}

// 다른 사람 풀이를 참고한 풀이
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var cnt1 = answers.filter((a, i) => a === a1[i % a1.length]).length;
    var cnt2 = answers.filter((a, i) => a === a2[i % a2.length]).length;
    var cnt3 = answers.filter((a, i) => a === a3[i % a3.length]).length;
    var max = Math.max(cnt1, cnt2, cnt3);

    if (cnt1 === max) {answer.push(1)};
    if (cnt2 === max) {answer.push(2)};
    if (cnt3 === max) {answer.push(3)};
    
    return answer;
}