var express = require('express');

var app= express();

app.get('/', function( req, res ){
	res.render( 'index.ejs', { gens: [
		"Ga",
		"Bu",
		"Zo",
		"Meu"
	] } );
});

app.get('/profil/:name', function( req, res	 ){
	res.render( 'profil.ejs', { nom: req.params.name } );
	
});

app.listen(3000, function() {
	console.log("Le serveur écoute sur le port 3000")
});