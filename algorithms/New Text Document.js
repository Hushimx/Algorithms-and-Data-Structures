
function pivot(arr,start,end){
  let pivotVal = arr[start]
  let swapIndex = start;
  for(let i = start + 1;i <= end;i++){
    if(pivotVal > arr[i]){
      swapIndex++
      [arr[i],arr[swapIndex]] = [arr[swapIndex],arr[i]]
    }
  }
  [arr[start],arr[swapIndex]] = [arr[swapIndex],arr[start]]
  return swapIndex
}


function quickSort(arr,start = 0,end = arr.length - 1){
 if(start < end){
  let pivotIndex = pivot(arr,start,end)  
  quickSort(arr,start,pivotIndex - 1)
  quickSort(arr,pivotIndex + 1,end)
 }
 return arr
}
console.log(quickSort([4,3,2,10,6,5,1]))