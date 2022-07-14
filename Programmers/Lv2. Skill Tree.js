function solution(skill, skill_trees) {
    let arr = [];
    let value = '';
    let bool = '';
    let answer = 0;
    
    for(let i = 0; i < skill_trees.length; i++) {
        for(let j = 0; j < skill_trees[i].length; j++) {
            if(skill.includes(skill_trees[i][j])) value += skill_trees[i][j];
            }
        arr.push(value);
        value = ''
    }
    
    for(let i = 0 ; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] !== skill[j]) {
                bool += '0';
                break;
            } else {
                bool += '1';
            }
        }
        bool.includes('0') ? null : answer++;
        bool = '';
    }
    
    return answer;
}

// 다른 사람 풀이
function solution(skill, skill_trees) {
    function isCorrect(n) {
        let test = skill.split('');
        for (var i = 0; i < n.length; i++) {
            if (!skill.includes(n[i])) continue;
            if (n[i] === test.shift()) continue;
            return false;
        }
        return true;
    }    

    return skill_trees.filter(isCorrect).length;
}