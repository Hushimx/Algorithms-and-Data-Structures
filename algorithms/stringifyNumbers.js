function stringifyNumbers (obj) {
  for(let i in obj){
      if(typeof obj[i] == "number") obj[i] = `${obj[i]}`
      if(typeof obj[i] == "object") obj[i] = stringifyNumbers(obj[i])

  }
  
  return obj
}