function solution(people, limit) {
    
    people.sort((a,b)=>b-a)
    const length = people.length;
    let boat = 0;
    let heavy = 0;
    let light = length-1
    while(heavy<=light){
        if(people[heavy]+people[light]<=limit){
            heavy++;
            light--;
            boat++;
        }else{
            heavy++;
            boat++;
        }
    }
    
    return boat;
}