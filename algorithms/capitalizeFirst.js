function capitalizeFirst (arr) {
let newArr = []

    function helper(helperArr){
        newArr.push(helperArr[0].charAt(0).toUpperCase() + helperArr[0].slice(1));
        if(helperArr.length == 1) return "done"
        helper(helperArr.slice(1))
    }
    helper(arr)
    return newArr
}