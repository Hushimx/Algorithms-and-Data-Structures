

class node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class doublyLinkedList{
    constructor(val){
        if(val){val = new node(val)}
        this.head = val ? val : null;
        this.tail = val ? val : null;
        this.length = val ? 1 : 0;
    }
    push(val){
        let newNode = new node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(val){
        if(!this.head) return undefined
        let deletedVal = this.tail
        if(this.length == 1){
            this.tail = null
            this.head = null
        }
        let newTail = this.tail.prev
        newTail.next = null
        this.tail.prev = null
        this.tail = newTail
        this.length--
        return this   
    }
    shift(){
        if(!this.head) return undefined
        if(this.length == 1){
            this.head = null
            this.tail = null
            this.length--
            return this
        }
        let shiftedNode = this.head
        this.head = this.head.next
        shiftedNode.next = null
        this.head.prev = null
        this.length--
        return this
    }
    unshift(val){
        if(!this.head){
            this.push(val)
        }else{
            let newNode = new node(val)
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode

        }
        this.length++
        return this
    }
    get(index){
        if(index < -this.length || index >= this.length) return -1;
        if(index < 0 ){
            index = index + this.length
        }
        if(index <= this.length / 2){

            console.log("1")
            let counter = 0;
            let currentNode = this.head;
            console.log("fisrt")
            while(currentNode.next != null){
            if(counter == index) return currentNode
            currentNode = currentNode.next
            counter++
             }
        }else{
            let currentNode = this.tail;
            let counter = this.length - 1;
         while(currentNode.prev != null){
            if(counter == index) return currentNode
            currentNode = currentNode.prev
            counter--
            }

        }
    }
    set(index,val){
        let requestedIndex = this.get(index)
        if(requestedIndex){
            requestedIndex.val = val
        }
        return requestedIndex
    }
    insert(index,val){
        if(index < 0 || index > this.length) return false
        if(index == this.length){this.push(val)}
        if(index == 0){this.unshift(val)}
        let newNode = new node(val)
        let requestedIndex = get(index - 1)
        newNode.prev = requestedIndex
        newNode.next = requestedIndex.next
        requestedIndex.next.pre = newNode
        requestedIndex.next = newNode
        return this

    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index == 0) return !!this.shift()
        if(index == this.length - 1) return !!this.pop()
        let removedNode = this.get(index)
        if(removedNode){
            let prevRem = removedNode.prev
            let afterRem = removedNode.next
            prevRem.next = afterRem
            afterRem.prev = prevRem
            removedNode.next = null
            removedNode.prev = null
            return removedNode
        }else return undefined
    }
}



let myList = new doublyLinkedList("1")
myList.push("2")
myList.push("3")
myList.push("4")
myList.push("5")

console.log(myList.remove(1))
console.log(myList)