function solution(s) {
    let ans = [];
    let arr = s.split(' ');
    
    for(let a in arr) {
        arr[a] = arr[a].substring(0,1).toUpperCase() + arr[a].substring(1).toLowerCase();
        ans.push(arr[a]);
    }
            
    return arr.join(' ');
}