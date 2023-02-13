function solution(n, arr1, arr2) {
    let answer = [];
    const zero = "0";

    for(let i = 0; i < n; i++) {
        // 1. 10진수 -> 2진수
        let bin1 = arr1[i].toString(2);
        let bin2 = arr2[i].toString(2);
        let orResult = "";

        if(bin1.length !== n)
            bin1 = zero.repeat(n - bin1.length) + bin1;

        if(bin2.length !== n)
            bin2 = zero.repeat(n - bin2.length) + bin2;

        // 2. OR 연산
        for(let j = 0; j < n; j++) {
            orResult += (parseInt(bin1[j]) || parseInt(bin2[j]) === 1 ? "#" : " ");
        }
        answer.push(orResult)
    }

    return answer;
}