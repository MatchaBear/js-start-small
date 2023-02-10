// constructor with prototype
// oop

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function () {
  return `This person born in ${this.dob.getFullYear()}`;
};
Person.prototype.getFullName = function () {
  return `This person full name is ${this.firstName} ${this.lastName}`;
};

// instantiate object
const person1 = new Person("John", "Doe", "4-3-1980");
const person2 = new Person("Mary", "Smith", "3-6-1970");
const person3 = new Person("Helen", "Rose", "3-11-2022");

console.log(person2.firstName);

console.log(`Full Year: ${person2.dob.getFullYear()}`);
console.log(`Date: ${person2.dob.getDate()}`);
console.log(`Day: ${person2.dob.getDay()}`);
console.log(`Month: ${person2.dob.getMonth()}`);
console.log(`Month: ${person2.dob.getUTCMonth()}`);
console.log(`Full Date: ${person2.dob}`);

console.log(`Full Date: ${person3.dob}`);

console.log(person1.getBirthYear());
console.log(person1.getFullName());

console.log(person1);
console.log(person2);
console.log(person3);
