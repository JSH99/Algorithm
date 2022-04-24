/**
 * @param {number[][]} grid
 * @return {number}
 */

 var countNegatives = function(grid) {
    let cnt = 0;
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            grid[i][j] < 0 ? cnt++ : null; 
        }
    }
    
    return cnt;
};