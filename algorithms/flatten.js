function flatten(arr){
    let nums = []
    
        function helper(helperarr){
            if(typeof helperarr[0] == "number") nums.push(helperarr[0])
            if(typeof helperarr[0] == "object") helper(helperarr[0])
            if(helperarr.length == 1) return "done"
            helper(helperarr.slice(1))
        }
        helper(arr)
  // add whatever parameters you deem necessary - good luck!
  return nums
}