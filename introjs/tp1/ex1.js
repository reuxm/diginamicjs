let e1 = 0;
let e2 = 1;
console.log(0);
console.log(1);
var i;
for ( i=0 ; i<18 ; i++ ) {
	e2 = e1+e2;
	e1 = e2-e1;
	console.log(e2);
}
