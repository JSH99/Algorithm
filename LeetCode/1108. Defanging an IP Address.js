/**
 * @param {string} address
 * @return {string}
 */

var defangIPaddr = function(address) {
    let ans = address.replaceAll('.', '\[.\]');
    return ans;
};