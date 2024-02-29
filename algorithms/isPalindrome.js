// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    let isPalindrome = true
    function helper(po1,po2){
        if(po2 == 0) return "done"
        if(str[po1] != str[po2]){
        isPalindrome = false
        return "done";
        }
        helper(po1 + 1,po2 - 1)
    }    
    helper(0,str.length - 1)
    return isPalindrome
  // add whatever parameters you deem necessary - good luck!
}
