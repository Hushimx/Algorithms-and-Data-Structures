function collectStrings(obj) {
    let newArr = []
 for(let i in obj){
     if(typeof obj[i] == "string") {
         newArr.push(obj[i])
     }
     if(typeof obj[i] == "object") {
         newArr.push(...collectStrings(obj[i]))
     }
 }
 return newArr
}