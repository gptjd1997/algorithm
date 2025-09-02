function solution(n, computers) {
    var answer = 0;
    
    const visited = Array(n).fill(false)
    
    
    
    
    const f = (curIdx) => {
        
        visited[curIdx] = true
        
        const curPC = computers[curIdx]
        
        curPC.forEach((v,i)=>{
            if(v==1 && i!=curIdx && !visited[i]){
                f(i)
            }
        })
    }
    
    
    visited.forEach((v,i)=>{
        
        if(!v){
            f(i)
            answer++;
        }
    })
    
    return answer;
}