function makeObject (d) {
	let o={};
	d.forEach(d=>o[d]=null);
	return o;
}

console.log( makeObject(['ga', 'bu', 'zo', 'meu']) );
