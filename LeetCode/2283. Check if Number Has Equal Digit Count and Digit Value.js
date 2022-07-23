/**
 * @param {string} num
 * @return {boolean}
 */
 var digitCount = function(num) {
    // num[n] = 'i' 숫자 n이 i번 나타남
     let obj = {};
     let answer = true;
     
     for(let i of num) {
         obj[i] === undefined ? obj[i] = 1 : obj[i]++;
     }
     
     for(let i = 0; i < num.length; i++) {
         if(obj[i] === undefined) obj[i] = 0;
         if(num[i] != obj[i]) {
             answer = false;
             break;
         }
     }
     return answer;
 };