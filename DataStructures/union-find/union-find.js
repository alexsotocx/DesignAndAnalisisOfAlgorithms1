
/**
 *
 *  Union find with pathcompression and weight connected(in Log n) and union O(Log n)
 */


var UnionFind = function(n, pathCompression) {
	var self = this;
	self.id = new Array(n);
	self.weight = new Array(n);
	self.groups = n;
	self.pathCompression = pathCompression !== false;

	self.intialize = function(n) {
		for (var i = 0; i < n; i++) {
			self.id[i] = i;
			self.weight[i] = 1;
		}
	}

	self.intialize(n);

	self.root = function(x) {
		while (self.id[x] != x) {
			if(self.pathCompression)
				self.id[x] = self.id[self.id[x]];
			x = self.id[x];
		}
		return x;
	};
	self.connected = function(x, y) {
		return self.root(x) == self.root(y);
	};

	self.union = function(x, y) {
		var self = this;
		if (!self.connected(x, y)) {
			var rootX = self.root(x);
			var rootY = self.root(y);
			if (self.weight[rootX] < self.weight[rootY]) {
				self.id[rootX] = rootY;
				self.weight[rootY] += self.weight[rootX];
			} else {
				self.id[rootY] = rootX;
				self.weight[rootX] += self.weight[rootY];
			}
			self.groups--;
		}
	};

	self.numberOfGroups = function(){
		return self.groups;
	}
}

module.exports = UnionFind;