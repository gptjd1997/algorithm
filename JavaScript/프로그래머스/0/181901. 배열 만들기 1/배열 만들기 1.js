function solution(n, k) {
    var answer = [];
    
    for(i=0 ; i<=n ; i++){
        if(i/k && i%k==0){
            answer.push(i)
        }
    }
    return answer;
}