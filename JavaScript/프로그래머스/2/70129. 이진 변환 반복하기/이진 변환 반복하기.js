function solution(s) {
    var answer = [0,0];
    
    const f = (stringX) =>{
        
        let counter = 0;
        let newString = ""
        if(stringX=="1"){
            return;
        }
        
        [...stringX].forEach((v)=>{
            if(v =="0"){
                counter++;
            }else{
                newString += '1';
            }
        })
        
        answer[0] += 1
        answer[1] += counter
        
        f(newString.length.toString(2))
    }
    
    
    f(s)
    
    console.log(answer)
    return answer;
}