function outer (a) {
	console.log("outer executes" + a);
	function inner(b) {
 		console.log("inner executes with " +a+ ", " +b);
	}
	return inner;
}

// proof of concept
var test = new outer(1);
test(2);