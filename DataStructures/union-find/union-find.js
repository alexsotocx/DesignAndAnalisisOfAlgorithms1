
/**
 *
 *  Union find with pathcompression and weight connected(in Log
 *         n) and union O(Log n)
 */

function UnionFind(n) {

	var self = this;
	self.id = new Array(n);
	self.weight = new Array(n);
	self.groups = 0;

	function intialize(n) {
		for (var i = 0; i < n; i++) {
			self.id[i] = i;
			self.weight[i] = 1;
		}
	}

	intialize(n);

	self.root = function(x) {
		while (self.id[x] != x) {
			self.id[x] = self.id[self.id[x]];
			x = self.id[x];
		}
		return x;
	}

	self.connected = function(x, y) {
		return self.root(x) == self.root(y);
	}

	self.union = function(x, y) {
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
	}

	self.numberOfGroups = function(){
		return self.groups;
	}
}

exports.UnionFind = UnionFind;
