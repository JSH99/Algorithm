function solution(a, b) {
    let answer = '';
    let count = 0;
    const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  
    for (let i = 1; i < a; i++) {
        count += month[i];
    }
    count += b;
    answer = day[(count + 4) % 7]; // 금요일이 1일
    
    return answer;
}