const string = "Javascript es maravilloso, con Javascript puedo crear el futuro de la web";

const replacedString = string.replace("Javascript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("Javascript", "Python");
console.log(replacedString2);

// es12: private methods
class Message {
    #show(val){
        console.log(val);
    };
}

const message = new Message();
message.show("Hola!");

//es12: Promise any
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

//es12: debil reference - to avoid deleteing this object with garbaje collector
class anyClass {
    constructor(element){
        this.ref = new WeakRef(element);
    }
}

//es12 new left operators
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);
console.log(isTrue);


let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);
console.log(isTrue);

