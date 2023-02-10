// function

// traditional or function declaration
function addNums(num1, num2) {
  console.log(num1 + num2);
}
addNums(1, 2);

// with return
function addNumsV2(num1, num2) {
  return num1 + num2;
}
console.log("With return: " + addNumsV2(1, 3));

// arrow
const addNumsV3 = (num1, num2) => {
  console.log(`With arrow function: ${num1 + num2}`);
};
addNumsV3(0, 0);

// arrow without curly
const addNumsV4 = (num1, num2) =>
  console.log(`Arrow function without curly: ${num1 + num2}`);
addNumsV4(0, 1);

// arrow without curly, only one parameter
const addNumsV5 = (num1) => num1 + 5; // prettier makes num1 use parentheses/braces
console.log("Arrow function without curly (only one param): " + addNumsV5(1));

// arrow function for forEach
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist app",
    isCompleted: false,
  },
];

todos.forEach(function (todo) {
  console.log(todo.text);
});

// with arrow
todos.forEach((todo) => console.log(todo));
todos.forEach((todo) => console.log(todo.text));

// gak jalan (forEach bisa di-assign ke variabel apa engga ?)
const todoForEach = todos.forEach((todo) => {
  return todo.id;
});
console.log(todoForEach);

// map
const todoMap = todos.map((todo) => {
  return todo.text;
});
console.log(todoMap);

// filter
const todoFilter = todos.filter((todo) => {
  return todo.isCompleted;
});
console.log(todoFilter);

// filter then map
const todoFilterThenMap = todos
  .filter((todo) => {
    return todo.isCompleted;
  })
  .map((todo) => {
    return todo.text;
  });
console.log(todoFilterThenMap);
