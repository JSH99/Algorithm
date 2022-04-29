/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

 var kWeakestRows = function(mat, k) {
    let cnt;
    let arr = [];
    let ans = [];
    
    // 1. row마다 1 개수 세기
    for(let i in mat) {
        cnt = 0;
        for(let j in mat[i]) {
            mat[i][j] === 1 ? cnt++ : null;
        }
        arr.push([i, cnt]);
    }
    
    // 2. 1 개수 기준으로 row index 정렬
    arr.sort((a,b) => a[1] - b[1]);
    
    // 3. k개만큼 배열에 추가
    for(let n = 0; n < k; n++) {
        ans.push(parseInt(arr[n][0]));
    }
    
    return ans;
};