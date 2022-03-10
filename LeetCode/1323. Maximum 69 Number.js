/**
 * @param {number} num
 * @return {number}
 */

 var maximum69Number  = function(num) {
    let temp = num.toString();
    let arr = [num, ];
    
    String.prototype.replaceAt=function(index, character) {
        return this.substr(0, index) + character + this.substr(index+character.length);
    }
    
    for(let i = 0; i < temp.length; i++) {
        num.toString()[i] === '6' ? 
            arr.push(temp.replaceAt(i, '9')) : arr.push(temp.replaceAt(i, '6'));
    }
    
    return Math.max.apply(null, arr);
};