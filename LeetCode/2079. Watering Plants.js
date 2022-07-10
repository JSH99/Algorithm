/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
 var wateringPlants = function(plants, capacity) {
    let water = capacity;
    let sum = 0;
    
    for(let i = 0; i < plants.length; i++) {
        if(plants[i] <= water) { // 물이 충분할 때
            sum++;
            water -= plants[i];
        } 
        else { // 부족해서 강에 갈 때
            sum += (i * 2 + 1); // 거리: 현재 위치 -> 강 -> 현재 위치
            water = capacity;
            water -= plants[i];
        }
    }
    return sum;  
};