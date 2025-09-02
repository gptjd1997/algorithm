function solution(numbers) {
    var answer = [];
    
    const length = numbers.length
    const temp = {}
    
    numbers.map((v,i)=>{
        
        for(let j=i+1; j<length; j++){
            temp[v+numbers[j]]=true
        }
    })
    
    
    return Object.keys(temp).map((v)=>Number(v));
}