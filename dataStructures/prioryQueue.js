class node {
  constructor(val, prioty) {
    this.val = val;
    this.prioty = prioty === undefined ? 3 : prioty;
  }
}
class priotyQueue {
  constructor() {
    this.values = [];
  }
  enQueue(element, prioty) {
    let newNode = new node(element, prioty);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.prioty >= parent.prioty) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  //De queue Methods
  deQueue() {
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    let extracted = this.values.pop();
    this.sinkDown(0);
    return extracted;
  }
  sinkDown(idx) {
    let biggerChildIdx = this.compare(
      this.findChild(idx, 1),
      this.findChild(idx, 2)
    );
    if(biggerChildIdx === null) return null
    if (this.values[idx].prioty > this.values[biggerChildIdx].prioty) {
      [this.values[idx], this.values[biggerChildIdx]] = [
        this.values[biggerChildIdx],
        this.values[idx],
      ];
      this.sinkDown(biggerChildIdx);
    }
  }
  findChild(idx, childN) {
    let child = 2 * idx + childN;
    return child;
  }
  compare(first, second) {
      if(!first || !second) return null
    if (this.values[first].prioty < this.values[second].prioty) return first;
    else return second;
  }
}

let queeue = new priotyQueue();
queeue.enQueue(50, 1);
queeue.enQueue(4332, 1);
queeue.enQueue("test");
queeue.enQueue("test1");
queeue.deQueue();
