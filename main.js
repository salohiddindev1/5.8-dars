// const btn = document.querySelector("#btn");
// btn.addEventListener("click", abdurahmon);

// function abdurahmon() {
//   text.textContent = "abduraxmon";
// }
// const plyus = document.querySelector('#plyus')
// const minus = document.querySelector("#minus");

const plyus = document.querySelector("#plyus");
const minus = document.querySelector("#minus");
const counter = document.querySelector("#counter");

plyus.addEventListener("click", plyusFunc);
minus.addEventListener("click", minusFunc);

let count = 0;

function plyusFunc() {
  counter.textContent = ++count;
}

function minusFunc() {
  counter.textContent = --count;
}
