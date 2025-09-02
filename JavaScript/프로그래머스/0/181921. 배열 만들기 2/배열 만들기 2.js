

function solution(l, r) {
    
    const result = []
    
    
    for(i=0 ; Number(i.toString(2))<=r ; i++){
        const parsedIndex = Number(i.toString(2))*5

        if(parsedIndex>=l && parsedIndex <= r){
            result.push(parsedIndex)
        }
    }
    
    return result.length>0 ? result : [-1]
}