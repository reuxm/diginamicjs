function fibo() {
	let nb = document.getElementById('number').value;
	let e1 = 0;
	let e2 = 1;
	if( nb > 0)
		document.getElementById('champ').innerHTML += '<p>'+0+'</p>';
	if( nb > 1)
		document.getElementById('champ').innerHTML += '<p>'+1+'</p>';
	var i;
	for ( i=0 ; i<nb-2 ; i++ ) {
		e2 = e1+e2;
		e1 = e2-e1;
		document.getElementById('champ').innerHTML += '<p>'+e2+'</p>';
	}
	
}
