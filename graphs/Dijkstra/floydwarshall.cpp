#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
#define vi vector<pair<ll, ll> >
#define INF 100000000000ll
vector<vector<ll> > graph(201, vector<ll>(201, INF));
ll distances(ll vertex){
	vertex--;
	if(graph[0][vertex] == INF){
		return 1000000ll;
	} else {
		return graph[0][vertex];
	}
}
int main()
{
	freopen("dijkstraData.txt", "r", stdin);
	string s;
	while(getline(cin, s))
	{
		stringstream ss;
		ss<<s;
		ll row;
		ss>>row;
		row--;
		while(ss>>s)
		{
			ll edge, weight;
			sscanf(s.c_str(), "%lld,%lld", &edge, &weight);
			edge--;
			graph[row][edge] = weight;
		}
	}
	for(ll k=0; k<200; k++)
		for(ll i=0; i<200; i++)
			for(ll j=0; j<200; j++)
				graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j]);

	printf("%lld,", distances(7ll));
	printf("%lld,", distances(37ll));
	printf("%lld,", distances(59ll));
	printf("%lld,", distances(82ll));
	printf("%lld,", distances(99ll));
	printf("%lld,", distances(115ll));
	printf("%lld,", distances(133ll));
	printf("%lld,", distances(165ll));
	printf("%lld,", distances(188ll));
	printf("%lld\n", distances(197ll));


}
