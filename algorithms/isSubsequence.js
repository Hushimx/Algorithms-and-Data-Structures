function isSubsequence(str1,str2) {
  // good luck. Add any arguments you deem necessary.
  let pointer1 = 0;
  let pointer2 = 0;
  let founded = 0
  for(pointer2 in str2){
      if(str1[pointer1] == str2[pointer2]){
          founded++
          pointer1++

      }
      if(founded == str1.length){
          return true
      }
  }
 
 return false
}


console.log(isSubsequence('sing', 'sting'));