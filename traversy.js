console.log("Hello World");

const a = 1;
const b = 5;
const c = a + b;

const isCool = true;

const isCoolInNumber = Number(isCool);
const isCoolInNumberWithTwoDecimalPlaces = Number(isCool).toFixed(2);
const d = isCool + c;

const myName = "Berry";
const myAge = 35;

const hello = `My name is ${myName} and my age is ${myAge}`;
console.log(hello);

const greeting = "Hello World";
const greetingCutFirstWord = greeting.substring(0, 5);
console.log(greetingCutFirstWord);

const greetingCutFirstWordUppercase = greeting.substring(0, 5).toUpperCase();
console.log(greetingCutFirstWordUppercase);

const word = "javascript";
const splitWord = word.split("");
console.log(word);
console.log(splitWord);

const numbers = new Array("hello", -1, 0, 1, 2, 3, 4, 5, "world");
console.log(numbers);

const fruits = ["apple", "oranges", "pears"]; // array
console.log(fruits);
console.log(fruits[0]);
fruits[3] = "grapes";
console.log(fruits);

fruits.push("mangoes");
console.log(fruits);
fruits.unshift("strawberries");
console.log(fruits);
fruits.pop(); // remove mangoes (the last item in the array)
console.log(fruits);

const isFruitsArray = !Array.isArray(fruits);
console.log(isFruitsArray);
console.log(fruits.indexOf("oranges"));
console.log(fruits.indexOf("orang"));

const person = {
  // objects
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};
console.log(person.address.state);
// console.log(firstName); // commenting this out so codes below can proceed

const {
  firstName,
  lastName,
  address: { city },
} = person;
console.log(person.firstName);
console.log(person);
console.log(firstName);
console.log(city);
// console.log(address: city); // does not work
// console.log(address: {city}); // does not work either
person.email = "johndoe@mail.com";
person.address.country = "US";
console.log(person);
