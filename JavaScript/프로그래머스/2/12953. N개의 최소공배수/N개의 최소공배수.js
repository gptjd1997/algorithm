function solution(arr) {
    var answer = 0;
   
    arr.sort((a,b)=>b-a)
    
    


    const f =(a,b,index)=>{
        
        
        if(index>=arr.length){
            answer = a
            return a;
        }

        f(getLcm(a,b),arr[index+1],index+1)
    }
    
    
    console.log(f(arr[0],arr[1],1))
    
    return answer;
}

const getLcm=(a,b)=>{
    return (a*b)/getGcd(a,b)
}

const getGcd=(a,b)=>{
    let temp = 0;
    while(true){
        temp = a%b;
        if(temp==0){
            return b;
        }else{
            a=b;
            b=temp
        }
        
    }
}