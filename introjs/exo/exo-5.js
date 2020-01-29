class Animal {
	constructor(age) {
		this._age=age;
	}
	get age() {
		return this._age;
	}
	set age(age) {
		this._age=age
	}
	static info(){
		console.log('Animal.info');
	}
	bruit(){ }
}

class Chient extends Animal {
	constructor(age=0) {
		super(age);
	this._a = '';
	}
	get a() {
		return this._a;
	}
	set a(a) {
		this._a = a;
	}
	bruit() {
		console.log('Ouaf');
	}
	static espece() {
		 return 'chient';
	}
	static info() {
		console.log('Animal > Chient.info');
	}
}

class Chat extends Animal {
	constructor(age=0) {
		super(age);
		this._b = '';
	}
	get b() {
		return this._b;
	}
	set b(b) {
		this._b=b;
	}
	bruit() {
		console.log('Nya');
	}
	static espece() {
		return 'chat';
	}
	static info() {
		console.log('Animal > Chat.info');
	}
}

let a = new Chat();
let b = new Chient(1);
let c = new Animal(2);
a.bruit();
b.bruit();
c.bruit();
//a.info() //error
Chat.info();
b.a=741;
console.log( a.age, b.age, a.b, b.a );
