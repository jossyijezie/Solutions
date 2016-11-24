solution1


module.exports={
	function aritGeo(arr){
		if (arr.length > 0){
			if (arr.length > 1){
				var res = -1
				for(var i = 1; i < arr.length-1; i++){
					a = arr[i-1];
					a2 = arr[i];
					d = a2 - a;
					if (a[i+1] == [a2 + d]){
						result = 'arithmetic';
						continue;
					}
					else if(a[i+1] == (d*3)){
						result = 'geometric';
						continue;
					}
					else{
						result = -1;
						break;
					}

			}
				}
				else{
					return -1;
				}
		}
		else{
			return 0;
		}
	}
	return result;
}

solution2

module.exports={

function Min-Max(arr){
	if(arr.length > 0){
		var min = arr[0];

		var max = arr[0];
		for(var i = 1, i < arr.length; i++){
			if (min > arr[i]){
				min = arr[i];
			}
			if(max < arr[i]){
				max = arr[i];
			}
		}
		else{
			return arr
		}
	}
	return [min, max];
}
}

solution3

module.exports={
	function fizzBuzz(a){
		var fizz;
		var buzz;
		var fizzbuzz;
		fizz = a%3;
		buzz = a%5;
		if((if fizz === 0) && (buzz === 0)){
			return "fizzbuzz"
		}
		else if(fizz === 0){
			return "fizz"
		}
		else if(buzz === 0){
			return "buzz"
		}
	}
	return a
}
