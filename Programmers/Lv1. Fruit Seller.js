function solution(k, m, score) {
    let answer = 0;
    let sorted = score.sort((a, b) => b - a);

    for(let i = m - 1; i < sorted.length; i+=m) {
        answer += sorted[i] * m;
    }

    return answer;
}