/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

 var countMatches = function(items, ruleKey, ruleValue) {
    let idx = 0;
    let cnt = 0;
    if (ruleKey === 'type') 
        idx = 0;
    else if (ruleKey === 'color')
        idx = 1;
    else if (ruleKey === 'name')
        idx = 2;
    for(let i in items) {
        if (items[i][idx] === ruleValue) 
            cnt++;
    }
    return cnt;
};