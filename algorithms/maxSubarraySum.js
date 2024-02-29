function maxSubarraySum(array,max){
    if(array.length < max) return null
let temp = 0;
 for(let i = 0; i < max ;i++){
     temp += array[i]

 }
let maxmimum = temp
 for(let i = 1;i< array.length - max + 1;i++){
     temp = temp - array[i - 1] + array[i + max - 1];
     maxmimum = Math.max(maxmimum,temp)
        
 }
return maxmimum
}