function solution(q, r, code) {
    var answer = '';
    [...code].map((v,index)=>{
        if(index%q == r){
            answer+=v
        }
    })
    return answer;
}