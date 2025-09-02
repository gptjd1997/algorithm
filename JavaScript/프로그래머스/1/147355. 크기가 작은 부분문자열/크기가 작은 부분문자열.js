function solution(t, p) {
    var answer = 0;
    const tLen = t.length
    const pLen = p.length
    
    let i=0;
    
    while(i <= tLen-pLen){
        
        const tWord = t.substring(i,i+pLen)
        if(Number(tWord) <= Number(p)){
            answer++;
        }
        i++;
    } 
    
    return answer
}