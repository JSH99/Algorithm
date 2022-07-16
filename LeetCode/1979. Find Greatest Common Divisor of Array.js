/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    const max = Math.max.apply(null, nums);
    const min = Math.min.apply(null, nums);
    let answer = 1;
    
    const gcd = (a, b) => {
      while (b > 0) {
        let temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    };
    
    answer = gcd(min, max);
    
    return answer;
};