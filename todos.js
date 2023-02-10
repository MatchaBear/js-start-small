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
    isCompleted: true,
  },
];

console.log(todos);
console.log(todos[1]);
console.log(`Task: ${todos[1].text}`);
console.log("Task ID: " + todos[1].id);

const todoJson = JSON.stringify(todos);
console.log(todoJson);

// for loop
for (let i = 0; i < 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

// While
let i = 0;
while (i < 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

for (let i = 0; i < todos.length; i++) {
  console.log(`Task name: ${todos[i].text}`);
}

for (let todo of todos) {
  console.log(`Task Name: ${todo.text}`);
}

// high order array methods: forEach, map, filter
// todos.forEach(function () {}); // this high order array methods they take in parameter of function
todos.forEach(function (todo) {
  console.log(`Task ID: ${todo.id}`);
}); // inside the parentheses should be the variable of ForEach item
// LOOKS MUCH BETTER WITH ARROW FUNCTION

todos.map(function (todo) {
  console.log(`Task ID = ${todo.id}`);
});

const todoIdWithForEach = todos.forEach(function (todo) {
  return todos.id;
});
console.log(`Todo with ForEach: ${todoIdWithForEach}`);

const todoIdWithMap = todos.map(function (todo) {
  return todos.id;
});
console.log(`Todo with Map: ${todoIdWithMap}`);

const todoIdWithFilter = todos.filter(function (todo) {
  return todos.id;
});
console.log(`Todo with filter: ${todoIdWithFilter}`);
