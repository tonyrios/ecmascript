let array = [1,2,3, [1,2,3, [1,2,3]]];

//es10: flat method
console.log(array.flat(2));

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

let hello = '        hello world';
console.log(hello);
//es10: trimStart
console.log(hello.trimStart());

let hello = 'hello World       ';
console.log(hello);
//es10: trimEnd
console.log(hello.trimEnd());

//es10: optional catch binding
try {

} catch {
  error
}


let entries = [["name", "oscar"], ["age", 32]];
//es10: fromEntries - convert an array to an object.
console.log(Object.fromEntries(entries));

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);