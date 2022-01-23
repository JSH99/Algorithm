/**
 *@param{number[]} candies
 *@param{number} extraCandies
 *@return{boolean[]}
 */

var kidsWithCandies = function(candies, extraCandies) {
    let ans = [];
    let max =Math.max.apply(null, candies);

    for(let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max)
            ans[i] = true;
        else
            ans[i] = false;
    }
    return ans;
};