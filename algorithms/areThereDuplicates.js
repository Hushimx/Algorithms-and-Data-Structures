function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  // checks if there is duplicates using frequancy counter
  let freq = {};
  for(let i of args){
      freq[i] = (freq[i] || 0) + 1;
  }
 for(let i in freq){
     if(freq[i] > 1){
         return true
     }
    
 }    
    
    
 // return Boolean value
 return false
}

