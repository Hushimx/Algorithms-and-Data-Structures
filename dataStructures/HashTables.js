//Hash the string to index that starts from zero to array's length

  
class hashMap {
    constructor(key,value){
        this.arrayLen = 13
        this.array = new Array(this.arrayLen)
        this.set(key,value)
    }
    hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
          let char = key[i];
          let value = char.charCodeAt(0) - 96
          total = (total * WEIRD_PRIME + value) % this.arrayLen;
        }
        return total;
      }
    set(key,value){

    const hashedKey = this.hash(key)

    this.array[hashedKey] ? this.array[hashedKey][key] = value : this.array[hashedKey] = {[key] : value}
    return this.array
    }
    get(key){
        const hashedKey = this.hash(key)
        if(this.array[hashedKey] && this.array[hashedKey][key]) return this.array[hashedKey][key]

        return null
    }
}
let newMap = new hashMap("test",22)
newMap.set("hashim",10);
console.log(newMap.get("hashim"))
newMap.set("hashim",50);
console.log(newMap.get("hashim"))