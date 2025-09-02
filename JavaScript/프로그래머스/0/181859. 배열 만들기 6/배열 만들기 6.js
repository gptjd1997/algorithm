function solution(arr) {
    var answer = []; 
    let i = 0;
    while(i<arr.length){
        
        const lastValue = answer.at(-1)
        
        if(lastValue==arr[i]){
            answer.pop()
        }else{
            answer.push(arr[i])
        }
        
        i++;
    }
    
    if(answer.length==0){
        answer = [-1]
    }
    return answer;
}