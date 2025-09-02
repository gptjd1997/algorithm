function solution(k, tangerine) {
    var answer = -1;
    
    tangerine.sort();
    
    const counts = []
    tangerine.map((v)=>{
        
        if(!counts[v]) counts[v] = 0;
        counts[v] += 1
    })
    
    counts.sort((a,b)=>b-a)
    
    let count = 0;
    let sum = 0;
    for(v of counts){
        sum+=v;
        count++;
        if(sum>=k){
            return count
        }
    }
}