class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  findChild(idx, childN) {
    let child = 2 * idx + childN;
    return child;
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  extraxtMax() {
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
    if (this.values[idx] < this.values[biggerChildIdx]) {
      [this.values[idx], this.values[biggerChildIdx]] = [
        this.values[biggerChildIdx],
        this.values[idx],
      ];
      this.sinkDown(biggerChildIdx);
    }
  }
  compare(first, second) {
    if (this.values[first] > this.values[second]) return first;
    else return second;
  }
}
