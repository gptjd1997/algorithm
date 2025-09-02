function solution(arr, queries) {
    var answer = [...arr]
     
     queries.map((v,i)=>{
          const s = v[0];
          const e = v[1];
          const k = v[2];

          arr.map((value, index) => {
               if(s<=index && index <= e && index% k === 0){
                    answer[index] += 1
               }
          })

     })

     return answer;
}