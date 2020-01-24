function fibo() {
	console.log('IN');
	let nb = document.getElementById('number').value;
	let e1 = 0;
	let e2 = 1;
	document.getElementById('champ').innerHTML += 0+'<br/>';
	document.getElementById('champ').innerHTML += 1+'<br/>';
	var i;
	for ( i=0 ; i<nb-2 ; i++ ) {
		e2 = e1+e2;
		e1 = e2-e1;
		document.getElementById('champ').innerHTML += e2+'<br/>';
	}
	
	console.log('OUT');
	
}
