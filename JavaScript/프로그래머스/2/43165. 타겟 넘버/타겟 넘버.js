function solution(numbers, target) {
    var answer = 0;
    
    const length = numbers.length
    const f = (sum,curIndex) =>{
        if(curIndex ==length){
            
            if(sum==target){
                answer++;
            }
            return;
        }
        
        
        f(sum+numbers[curIndex],curIndex+1)
        f(sum-numbers[curIndex],curIndex+1)
        
    }
    
    
    f(0,0)
    return answer;
}