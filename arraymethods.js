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
// THIS CAN BE DONE WITH ARROW FUNCTION

// map
const todoWithMap = todos.map(function (todo) {
  return todo.text;
});
console.log(todoWithMap);

// filter not completed
const todoNotCompleted = todos.filter(function (todo) {
  return !todo.isCompleted;
});
console.log(todoNotCompleted);

// filter completed
// const todoCompleted = todos
//   .filter(function (todo) {
//     return todo.isCompleted;
//   })
// console.log(todoCompleted);

// filter completed then map
const todoCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted;
  })
  .map(function (todo) {
    return todo.text;
  });
console.log(todoCompleted);

// gak jalan
const todoTest = todos
  .map(function (todo) {
    return todo.isCompleted;
  })
  .map(function (todo) {
    return todo.text;
  });
console.log(todoTest);
