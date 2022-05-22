function solution(s) {
    let obj = {
        zero : 0, one : 1, two : 2, three : 3, four : 4, 
        five : 5, six : 6, seven : 7, eight : 8, nine : 9
    }
    
    for(let key in obj) {
        if(s.includes(key)) {
            let regexAll = new RegExp(key, "gi");
            s = s.replace(regexAll, obj[key]);
        }
    }
    return parseInt(s);
}