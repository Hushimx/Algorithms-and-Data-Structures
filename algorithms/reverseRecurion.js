function reverse(str){
  // add whatever parameters you deem necessary - good luck!
    if (str.length == 1) return str[0]
    return str[str.length - 1] + reverse(str.substr(0,str.length - 1))
}

reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'