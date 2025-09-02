function solution(brown, yellow) {
    var answer = [];
    
    for(let i = 3; i<brown+yellow; i++){
        
        for(let j= 3; j<brown+yellow; j++){
            if(i*j==brown+yellow){
                if((j-2)*(i-2) == yellow) return[Math.max(i,j),Math.min(i,j)]
            }
        }
    }
    return answer;
}