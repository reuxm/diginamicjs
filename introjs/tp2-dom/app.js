let target = Math.floor((Math.random() * 10) + 1);
let tries = 5;

//console.log(target);

function go() {
	guess = document.querySelector('#guess').value;
	let value = parseInt(guess);
	
	if( value==NaN || value < 1 || value > 10 ) {
		document.querySelector('#dialog').textContent = "Donnée invalide";
	}
	else {
		tries--;
		if( tries <= 0 ) {
			document.querySelector('#dialog').textContent = "ECHEC";
		}
		else if( value == target ) {
			document.querySelector('#dialog').textContent =
				"VICTOIRE en " + (5-tries) + " coups";
		}
		else {
			document.querySelector('#dialog').textContent = 
				"NON (" + (tries) + " essais restants)";
		}
	}
}