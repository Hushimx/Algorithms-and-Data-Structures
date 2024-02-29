function binarySearch(arr,target){
    let min = 0;
    let max = arr.length - 1;
    let currentMid = Math.floor(max + min / 2);
    
    while(min < max){
        if(arr[currentMid] == target) return currentMid;
        if(arr[currentMid] < target) min = currentMid + 1;
        if(arr[currentMid] > target) max = currentMid - 1;
    currentMid = Math.floor(max + min / 2);


    }
    
    return -1;
}