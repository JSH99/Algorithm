/**
 * @param {number[][]} mat
 * @return {number}
 */

 var diagonalSum = function(mat) {
    let sum = 0;
    
    for(let i = 0; i < mat.length; i++) {
        for(let j = i; j < mat[i].length; j++) {
            sum += mat[i][j];
            sum += mat[i][mat[i].length - 1 - j];
            break;
        }
    }
        
    if(mat.length % 2 === 1) {
        let n = (mat.length - 1) / 2;
        sum -= mat[n][n];
    }

    return sum;
};