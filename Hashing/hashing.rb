numbers = {}
@array = []
@array = File.open('algo1-programming_prob-2sum.txt').read.split.map { |num| num.to_i}
@array.sort!
def binary_search(lo, hi, number)
	if(lo < hi)
		mid = ((lo + hi) / 2)
		valueMid = @array[mid]
		if (valueMid >= number)
			return binary_search(lo, mid, number)
		 else
			return binary_search(mid + 1, hi, number)
		end
	end
	return lo
end

def lower_bound(number)
	binary_search(0, @array.length - 1, number)
end

def upper_bound(number)
	binary_search(0, @array.length - 1, number + 1)
end

range = 10000
ans = {}
@array.each_with_index do |x, i|
	loi = lower_bound(-(range + x))
	upl = upper_bound((range - x))
	while(loi < upl)
		#puts "#{@array[loi]} => #{@array[upl]}"
		if loi != i and @array[loi] != @array[i]
			sum = @array[loi] + @array[i]
			ans[sum] = sum
		end
		loi += 1
	end
end

puts "R #{ans.keys.length}"
