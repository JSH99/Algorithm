/**
 * @param {string[]} operations
 * @return {number}
 */

var finalValueAfterOperations = function(operations) {
    X = 0;
    for(var i=0; i<operations.length; i++) {
        if(operations[i]==='--X' || operations[i]==='X--') {
            X -= 1;
        }
        else {
            X += 1;
        }
    }
    return X;
};