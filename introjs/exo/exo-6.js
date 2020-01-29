async function f() {

	await fetch('https://api.spacexdata.com/v3/launches/latest')
	.then( r => r.json() )
	.then( d => console.log(d) );

}
f();
