/**
 *
 * @author alexander
 *	Quick Find - connected in O(1) union in O(N)
 */
package unionFind;

public class QuickFind {

	private int id[];

	public QuickFind(int n) {
		id = new int[n];
		for (int i = 0; i < n; i++) {
			id[i] = i;
		}
	}

	public boolean connected(int x, int y) {
		return id[x] == id[y];
	}

	public void union(int x, int y) {
		int rootX = id[x];
		int rootY = id[y];
		for (int i = 0; i < id.length; i++) {
			if (id[i] == rootX)
				id[i] = rootY;
		}
	}
}
