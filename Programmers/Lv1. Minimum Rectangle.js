function solution(sizes) {
    let answer = 0;
    let maxW = 0;
    let maxH = 0;
    
    for(let i in sizes) {
        sizes[i].sort((a, b) => a - b);
        if(sizes[i][1] > maxH) maxH = sizes[i][1];
    }
    answer = maxW * maxH;
    return answer;
}