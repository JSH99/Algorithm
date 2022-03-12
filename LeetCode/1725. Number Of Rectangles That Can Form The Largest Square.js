/**
 * @param {number[][]} rectangles
 * @return {number}
 */

 var countGoodRectangles = function(rectangles) {
    let arr = [];
    let cnt = 0;
    
    for(let r in rectangles) {
        rectangles[r][0] > rectangles[r][1] ? 
            arr.push(rectangles[r][1]) : arr.push(rectangles[r][0]);
    }
    
    for(let a in arr) {
        Math.max.apply(null, arr) === arr[a] ?  cnt++ : null;
    }
    
    return cnt;
};