// single element

console.log(window);

const form = document.getElementById("my-form");
console.log(form);
const formV2 = document.querySelector("#my-form");
console.log(formV2);

console.log(document.getElementById("first-li"));

// multiple element
console.log(document.querySelectorAll(".item")); // NodeList
console.log(document.getElementsByClassName("item")); // HTMLCollection

const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));

// manipulating the 'ul' elements and its child
const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstChild.textContent = "Hello"; // add "Hello" above firstChild element
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Brad";
ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

const btn = document.querySelector(".btn");
// btn.style.background = "red";

btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click");
  console.log(event.target);
  console.log(event.target.className);
  document.querySelector("#my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  document;
});
