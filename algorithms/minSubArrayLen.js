 function minSubArrayLen(posarray, posint) {
    let start = 0;
    let end = 0;
    let sum = 0;
    
    while(start < posarray.length){
        if(sum < posint && end < posarray.length){
            sum += posarray[end]
            end++
        }else{
            break;
        }
    }
 }