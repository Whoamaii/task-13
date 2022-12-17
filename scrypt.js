// function generateList(array) {
//   array.forEach(function (item) {
//     let li = document.createElement("li");
//     let ul = document.querySelector("ul");
//     li.innerHTML = item;
//     ul.appendChild(li);
//     if (item == []) {

//   });

let arr = [1, 2, [4, 5, 6], 3];

const generateList = (elem, arr) => {
  let ul = document.createElement("ul");
  let li;
  elem.appendChild(ul);
  arr.forEach(function (item) {
    if (Array.isArray(item)) {
      generateList(li, item);
      return;
    }
    li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
  });
};
const div = document.getElementById("myList");
generateList(div, arr);
