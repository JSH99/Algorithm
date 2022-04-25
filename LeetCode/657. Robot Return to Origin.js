 /**
 * @param {string} moves
 * @return {boolean}
 */

  var judgeCircle = function(moves) {
    let horizon = 0; // 수평
    let vertical = 0; // 수직
    let ans;
    
    for(let i in moves) {
        switch (moves[i]) {
            case 'R':
                horizon++;
                break;
            case 'L':
                horizon--;
                break;
            case 'U':
                vertical++;
                break;
            case 'D':
                vertical--;
        }
    }
    horizon === 0 && vertical === 0 ? ans = true : ans = false;
    return ans;
};