function capitalizeWords (arr) {
  let newArr = [];
  newArr.push(arr[0].toUpperCase())
  if(arr.length == 1) return newArr
  
  return newArr.concat(capitalizeWords(arr.slice(1)))
}