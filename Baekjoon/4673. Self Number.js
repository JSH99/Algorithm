function d(n) {
    let str = n.toString();
    let total = n;
    
    for(let i = 0; i < str.length; i++) {
        total += parseInt(str[i]);
    }
    
    return total;
}

let self = [];
let i = 1;

while(i <= 10000) {
    self.push(d(i));
    i++;
}

for(let i = 1; i <= 10000; i++){
    if(!self.includes(i)){
       console.log(i);
    }
}