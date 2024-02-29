// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr,callBackFnc){
  let status = null
  
  
    function helper(helperArr){
        if(callBackFnc(helperArr[0]) == true){
            status = true
            return "done"
        }
        if(helperArr.length == 1){
            status = false
            return "done"
        }
        helper(helperArr.slice(1))
    }
    
    helper(arr)
  return status
}