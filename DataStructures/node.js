var Node = function (value) {
  var self = this;
  self.value = value;
  self.next = null;
  self.last = null;
  self.idetifier = Math.random();

  self.delete = function () {
    if(!self.next && !self.last){
      return;
    } else if(!self.next){
      self.last.next = null;
    } else if (!self.last) {
      self.next.last = null;
    } else {
      self.last.next = self.next
      self.next.last = self.last
    }
    self.last = null
    self.next = null
  }
}

module.exports = Node;
