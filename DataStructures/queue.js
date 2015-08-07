const Node = require('./node');

var Queue = function () {
  var self = this;
  self.firstNode = null;
  self.lastNode = null;
  self.size = 0;

  self.push = function (value) {
    if(self.size == 0){
      self.firstNode = self.lastNode = new Node(value);
    } else {
      var node = new Node(value);
      self.lastNode.next = node;
      self.lastNode = node;
    }
    self.size++;
  }
  self.pop = function () {
    if(self.size == 0){
      return null;
    } else {
      var value = self.firstNode.value;
      if(--self.size == 0){
        self.firstNode = null;
        self.lastNode = null;
      } else {
        self.firstNode = self.firstNode.next
      }

      return value;
    }
  }

  self.empty = function () {
    return self.size == 0;
  }

  self.peek = function () {
    if(!self.empty()){
      return self.firstNode.value;
    } else {
      return null;
    }
  }

}
module.exports = Queue;
