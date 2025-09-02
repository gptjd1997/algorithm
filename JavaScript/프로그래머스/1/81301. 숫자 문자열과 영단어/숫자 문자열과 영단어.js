// const english = [zero,one,two,three,four,five,six,seven,eight,nine]


const english = {
    ze:{number:0,count:4},
    on:{number:1,count:3},
    tw:{number:2,count:3},
    th:{number:3,count:5},
    fo:{number:4,count:4},
    fi:{number:5,count:4},
    si:{number:6,count:3},
    se:{number:7,count:5},
    ei:{number:8,count:5},
    ni:{number:9,count:4}
}

function solution(s) {
    var answer = 0;
    
    const stack =[]
    for(let i=0; i<s.length; i++){
        const init = english[s[i]+s[i+1]]
        if(init){
            i+=init.count-1;
            stack.push(init.number)
        }else{
            stack.push(Number(s[i]))
        }
        
    }
    
    return Number(stack.join(''));
}