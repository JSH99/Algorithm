function solution(s) {
    let arr = s.split(' ');
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    return min + ' ' + max;
}