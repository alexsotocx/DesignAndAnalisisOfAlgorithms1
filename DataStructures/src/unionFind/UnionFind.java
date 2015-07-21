package unionFind;

/**
 *
 * @author alexander Union find with pathcompression and weight connected(in Log
 *         n) and union O(Log n)
 */

public class UnionFind {

	private int id[];
	private int weight[];
	private int groups;

	public UnionFind(int n) {
		id = new int[n];
		weight = new int[n];
		groups = n;
		for (int i = 0; i < n; i++) {
			id[i] = i;
			weight[i] = 1;
		}
	}

	private int root(int x) {
		while (id[x] != x) {
			// id[x] = id[id[x]];
			x = id[x];
		}
		return x;
	}

	public boolean connected(int x, int y) {
		return root(x) == root(y);
	}

	public void union(int x, int y) {
		if (!connected(x, y)) {
			int rootX = root(x);
			int rootY = root(y);
			if (weight[rootX] < weight[rootY]) {
				id[rootX] = rootY;
				weight[rootY] += weight[rootX];
			} else {
				id[rootY] = rootX;
				weight[rootX] += weight[rootY];
			}
			groups--;
		}
	}

	public int numberOfGroups() {
		return groups;
	}
}
