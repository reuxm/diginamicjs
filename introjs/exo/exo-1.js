var notes = [37, 4, 18, 26, 33, 30, 10];
var okNotes = notes.map(n=>n/2).filter(n=>n>=10);
console.log( okNotes.reduce( (a,i)=>a+i ) / okNotes.length );
