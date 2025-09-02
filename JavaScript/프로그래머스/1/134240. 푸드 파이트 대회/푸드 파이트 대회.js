function solution(food) {
    var answer = '';
    
    
    for(i=1; i<food.length; i++){
        const v = food[i]
        const temp = i.toString().repeat(v/2)
        answer+=temp
    }
    const reversed = answer.split('').reverse().join('')
    console.log(reversed)
    return answer+'0'+reversed;
}