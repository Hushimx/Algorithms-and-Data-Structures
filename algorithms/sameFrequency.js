function sameFrequency(num1,num2){
  if(num1.toString().length == num2.toString().length){
      num1 = new Set([...num1.toString()]);
      num2 = new Set([...num2.toString()]);
        let found = 0;
        num1.forEach(element => {
          if(num2.has(element)){
            found++
          }
        });
          return found.toString() == num2.size && found.toString() == num1.size ? true : false;

      }else{
        return false
      }}
