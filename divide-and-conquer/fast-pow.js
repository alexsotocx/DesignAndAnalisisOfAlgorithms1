/**
	Fast exponientation
	Running time Log b
*/
var FastPow = {
	pow: function(a, b) {
		if (b == 0) {
			return 1;
		} else if (b == 1) {
			return a;
		}else{
			var c = pow(a, Math.floor(b/2));
			c *= c;
			if((b % 2) == 1)
				c *= a
			return c;
		}
	}
}

module.exports = FastPow;