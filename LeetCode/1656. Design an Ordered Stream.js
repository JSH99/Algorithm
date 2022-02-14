/**
 * @param {number} n
 */
 var OrderedStream = function(n) {
    this.arr = new Array(n);
    this.ptr = 0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.arr[idKey - 1] = value;
    let ans = [];
    
    while(this.arr[this.ptr]) {        
        ans.push(this.arr[this.ptr]);
        this.ptr++;  
    } 
    
    return ans;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */