function solution(sizes) {
    var answer = 0;
    
    let X = 0;
    let Y = 0;
    

    
    const reducedSizes = sizes.map((v,i)=>{
        const sorted = v.sort((a,b)=>b-a)
        X = Math.max(X,sorted[0])
        Y = Math.max(Y,sorted[1])

    })
    
    return X*Y;
}