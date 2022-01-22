//es8: 2017

//es8: generate a matrix of elements of an object with entries
const data = {
  frontend: 'Oscar',
  backend: 'ISabel',
  design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


//es8: get array of values of an object
const data = {
  frontend: 'Oscar',
  backend: 'ISabel',
  design: 'Ana',
}

const values = Object.values(data);
console.log(values)
console.log(values.length)

//es8: fill in the beggining or in the end with a string
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'))
console.log('food'.padEnd(12, '-----'))

//es8: trailing commas
const obj = {
  name: 'oscar',
}

//es8: async and awaits
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
};

/*const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();*/

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();