function findLongestSubstring(str){
  // implement to slideing window patrren
    let start = 0;
    let end = 0;
    let sChr = {};
    let count = 0;
    // declare the vars we will
    // loop
    while(start < str.length){
        if(!sChr[str[end]]){
            sChr[str[end]] = 1;
            end++
        }else{
            break;
        }
    }
  return end
  
  // return the count of LongestSubstring
}
findLongestSubstring('longestsubstring') // 8
