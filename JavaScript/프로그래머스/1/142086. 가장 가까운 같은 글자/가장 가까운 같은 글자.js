function solution(s) {
    var answer = Array.from({length:s.length},()=>-1)
    
    const f = (word,originIndex,curIndex,step)=>{
        
        if(s.charAt(curIndex) == word){
            answer[originIndex] = (step)
            return;
        }
        
        if(curIndex<=0){
            return;
        }
        
        f(word,originIndex,curIndex-1,step+1)
        
    }
    
    [...s].map((v,i)=>{
        
          
          
        if(i>0){
            f(v,i,i-1,1)
            
        }}
    )
    return answer;
}