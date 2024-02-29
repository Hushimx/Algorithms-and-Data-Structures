function countUniqueValues(array){
  let Pointer1 = 0;
    for(let Pointer2 = Pointer1+1; Pointer2 < array.length;){
            if(array[Pointer1] == array[Pointer2]){
                Pointer2++
                console.log(`fount ${array}`)
            }
            if(array[Pointer1] != array[Pointer2]){
                Pointer1++
                array[Pointer1] = array[Pointer2]
                console.log(`not fount ${array}`)
            }
            
            
            
 
      

}   

return Pointer1;

}