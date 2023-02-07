function solution(k, score) {
    let result = [];
    let fame = [];
    for(let i = 0; i < score.length; i++) {
        fame.sort((a, b) => b - a);

        if(fame.length < k) {
            fame.push(score[i]);
        } else {
            for(let j = 0; j < fame.length; j++) {
                if(score[i] >= fame[j]) {
                    fame.splice(k - 1);
                    fame.push(score[i]);
                }
            }
        }
        result.push(Math.min.apply(null, fame));
    }
    return result;
}