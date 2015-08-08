var SCC = function (graph, graphT) {
	var N = graph.length;
	console.log("TOTAL", N);
	var sizeOFScc = 0, numberofScc = 0;
	var s = [];
	var t = 0;
	var visited = new Array(N);

	var kosajaru = function (node, pass)  {
		sizeOFScc++;
		visited[node] = true;
		var neighboors = graph[node] || [];
		if(pass == 1)
			neighboors = graphT[node] || [];
		for (var i = 0; i < neighboors.length; i++) {
			var vertex = neighboors[i];
			if(!visited[vertex]){
				kosajaru(vertex, pass);
			}
		}
		if(pass == 1){
 			s.push(node)
		}
	}
	console.log("Lol1");

	for (var i = N-1; i >= 0; i--) {
		if(!visited[i]){
			kosajaru(i, 1);
		}
	};
	console.log("Lol2");

	var sizes = [];
	visited = new Array(N);
	for (var i = s.length - 1; i >= 0; i--) {
		if(!visited[s[i]]){
			numberofScc++;
			sizeOFScc = 0;
			kosajaru(s[i], 2);

			sizes.push(sizeOFScc);

		}
	};
	sizes = sizes.sort(function (a,b) {
			return a - b;
		})

	return {
		number: numberofScc,
		sizes: [sizes[sizes.length - 1],sizes[sizes.length - 2], sizes[sizes.length - 3], sizes[sizes.length - 4], sizes[sizes.length - 5]]
	};
};
module.exports = SCC;