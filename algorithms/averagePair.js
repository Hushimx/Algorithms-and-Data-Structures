function averagePair(arrayy,avrage){
  // first declare ponitrs one start at the beginning and the other from the end
  let pointer1 = 0;
  let pointer2 = arrayy.length - 1;
  
  // while loop 
  let average = 0;
  while(pointer1 < pointer2){
      average = (arrayy[pointer1] + arrayy[pointer2]) / 2;
      if(average == avrage){
        console.log(average,arrayy[pointer1],arrayy[pointer2])
          return true
      }
      if(average < avrage){
          pointer1++
      }else{
          pointer2--
      }
      average = 0
  }
    
    
    
 // return boolean value
 return false
}
