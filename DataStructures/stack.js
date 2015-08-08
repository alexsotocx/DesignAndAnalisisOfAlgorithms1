const Node = require('./node');

var Stack = function () {
  var self = this;
  self.lastNode = null;
  self.size = 0;

  self.push = function (value) {
    if(self.size == 0){
      self.lastNode = new Node(value);
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
      var value = self.lastNode.value;
      if(--self.size == 0){

        self.lastNode = null;
      } else {
        self.lastNode = self.lastNode.last
      }

      return value;
    }
  }

  self.empty = function () {
    return self.size == 0;
  }

  self.peek = function () {
    if(!self.empty()){
      return self.lastNode.value;
    } else {
      return null;
    }
  }

}
module.exports = Stack;
