function validAnagram(arr1,arr2){
  // add whatever parameters you deem necessary - good luck!
  let objFromArray1 = {}
  let objFromArray2 = {};
  if(arr1.length != arr2.length){
      return false
  }
  for (const i of arr1){
      objFromArray1[i] = (objFromArray1[i] || 0) + 1 ;
  }
  for (const i of arr2){
      objFromArray2[i] = (objFromArray2[i] || 0) + 1 ;
  }
  for(const prop in objFromArray1){
      if(objFromArray1[prop] != objFromArray2[prop]){
          return false
      }
  }
 
 return true 

}
