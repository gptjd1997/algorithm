function solution(my_string, m, c) {
    var answer = '';
    
    let i = c;
    while(i<=my_string.length){
        answer+= my_string[i-1]
        i+=m;
    }
    
    
    return answer
   
    
}