//Creating undirected graph
class graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return "Already declered";
    this.adjacencyList[vertex] = [];
  }
  removeVertex(ver) {
    if (this.adjacencyList[ver]) {
      let keys = Object.keys(this.adjacencyList);
      keys.forEach((key) => {
        this.adjacencyList[key] = this.adjacencyList[key].filter(
          (edge) => edge != ver
        );
      });
      delete this.adjacencyList[ver];
      return this;
    } else return "Vertex not found";
  }
  addEdge(ver1, ver2) {
    if (this.adjacencyList[ver1] && this.adjacencyList[ver2]) {
      this.adjacencyList[ver1].push(ver2);
      this.adjacencyList[ver2].push(ver1);
      return this.adjacencyList;
    } else return "One or more of the vertces are not declerd";
  }
  removeEdge(ver1, ver2) {
    if (this.adjacencyList[ver1] && this.adjacencyList[ver2]) {
      this.adjacencyList[ver1] = this.adjacencyList[ver1].filter(
        (edge) => edge != ver2
      );
      this.adjacencyList[ver2] = this.adjacencyList[ver2].filter(
        (edge) => edge != ver1
      );
      return this.adjacencyList;
    } else return "One or more of the vertces are not declerd";
  }
}
let gr = new graph();
gr.addVertex("Jeddah");
gr.addVertex("Makkah");
gr.addVertex("Riyadh");
console.log(gr.addEdge("Jeddah", "Makkah"));
console.log(gr.addEdge("Jeddah", "Riyadh"));
console.log(gr.removeVertex("Riyadh"));
