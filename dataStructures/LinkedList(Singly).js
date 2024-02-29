



class node{
    constructor(val){
        this.val = val
        this.next = null;
    }
}


class SinglyLinked{
    constructor(val){
        this.head = val ? new node(val) : null
        this.tail = this.head ? this.head : null;
        this.length = val ? 1 : 0;
    }
    push(val){
        if(this.head == null){
            this.head = new node(val)
            this.tail = this.head
            this.length++
            return true

        }else{
            this.tail.next = new node(val)
            this.tail = this.tail.next
            this.length++
            return true
        }
        return false
    }
        find(val){
        let currentPiece = this.head
        let indexx = 0;
        for(let i=0; i <= this.length;i++){
            if(currentPiece.val == val){
                return indexx
            }
            indexx++
            currentPiece = currentPiece.next
            
        }
        return "not found"

    }
    pop(){
        if(this.length > 0){
        let pre = this.head
        let temp = pre.next;
        while(temp.next != null){
            pre = pre.next
            temp = temp.next;
        }
       this.tail = pre
       this.tail.next = null
       this.length--
       return temp
        }else return 0;
    }
    shift(){
        if(this.length < 1)return undefined
        else {
            this.head = this.head.next
            this.length--
        }

    }
    unshift(val){
        let newVal = new node(val)
        if(this.head == null){
            this.head = newVal
            this.tail = this.head
            this.length++
            return true

        }else{
            newVal.next = this.head;
            this.head = newVal
            this.length++
            return true
        }
        return false

    }
    get(requestedIndex){
        let current = this.head
        for(let i = 0;i < this.length;i++){
            if(requestedIndex == i) return current
            current = current.next
        }
        return -1
    }
    map(fnc){
        let newList = new SinglyLinked()
        let current = this.head
        while(current != null){
            newList.push(fnc(current.val))
            current = current.next
        }
        return newList
        // return currentList

    }
    forEach(fnc){
        let current = this.head
        while(current != null){
            fnc(current.val)
            current = current.next
        }
    }
    set(index,val){
        let requestedIndex = this.get(index)
        requestedIndex.val = val
        return this
    }
    insert(index,val){
        if(index < 0 || index >= this.length){
            return false
        }
        if(index == 0){
            return this.unshift(val)
            
        }else if(index == this.length - 1){
            return this.push(val)
        }
        const newNode = new node(val)
        const pre = this.get(index - 1)
        newNode.next = pre.next
        pre.next = newNode
        this.length++
        return true


    }
    // 1 2 3 4 5
    reverse(){
        [this.head,this.tail] = [this.tail,this.head]
        let current = this.tail.next
        this.tail.next = null
        let next = ""
        let prev = this.tail
        while(this.head.next == null){
        next = current.next
        current.next = prev
        prev = current
        current = next

        }        

        return this
    }
}


let arrayLike = new SinglyLinked();

arrayLike.push(1)
arrayLike.push(2)
arrayLike.push(3)
arrayLike.push(4)
arrayLike.push(5)



console.log(arrayLike.reverse())


