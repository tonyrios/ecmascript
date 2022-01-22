const button = document.getElementById("btn");

//es11: Dinamic Import
button.addEventListener("click", async function (){
    const module = await import("./file.js");
    module.hello();
})

//es11: big numbers

const aBigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber, anotherBigNumber);

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

//es11: allSettled
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

//es11: global This
console.log(window);
console.log(globalThis);

//es11: null operator
const foo = 'asd' ?? 'default string';
console.log(foo);

//es11: optiona chaining
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log('email');
} else{
    console.log('fail');
}