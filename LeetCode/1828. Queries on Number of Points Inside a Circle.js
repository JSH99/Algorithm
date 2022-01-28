/**
 *@param{number[][]} points
 *@param{number[][]} queries
 *@return{number[]}
 */

var countPoints = function(points, queries) {
    let inCirclePoint = [];
    for(let j = 0; j < queries.length; j++) {
        let cnt = 0;
        for(let i = 0; i < points.length; i++) {
            if ((points[i][0] - queries[j][0])**2 + (points[i][1] - queries[j][1])**2 <= queries[j][2]**2) {
                cnt++;
            }
        }
        inCirclePoint.push(cnt);
    }
    return inCirclePoint;
};