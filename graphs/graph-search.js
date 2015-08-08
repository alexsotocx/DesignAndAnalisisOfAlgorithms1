const Queue = require('../DataStructures/queue');
const Stack = require('../DataStructures/stack');
const GraphSearch = {
  BFS(graph, startVertex){
    var queue = new Queue();
    var visited = new Array(graph.length);
    var path = {}
    queue.push(startVertex);
    visited[startVertex] = true;
    path[startVertex] = {
      last: null,
      distance: 0
    }
    while(!queue.empty()){
      var vertex = queue.pop();
      var nodes = graph[vertex];
      for (var i = 0;i < nodes.length; i++) {
        var node = nodes[i];
        if(!visited[node]){
          visited[node] = true;
          queue.push(node)
          path[node] = {
            last: vertex,
            distance: path[vertex].distance + 1
          };
        }
      }
    }
    return {
      visited: visited,
      path: path
    }
  },
  DFS(graph, startVertex){
    var queue = new Stack();
    var visited = new Array(graph.length);
    var distance = new Array(graph.length);
    queue.push(startVertex);
    visited[startVertex] = true;
    distance[startVertex] = 0;
    while(!queue.empty()){
      var vertex = queue.pop();
      var nodes = graph[vertex];
      for (var i = 0;i < nodes.length; i++) {
        var node = nodes[i];
        if(!visited[node]){
          visited[node] = true;
          distance[node] = distance[vertex] + 1;
          queue.push(node)
        }
      }
    }
    return {
      visited: visited,
      distance: distance
    }
  }
}
module.exports = GraphSearch;
