// console.log("Hello to dom class");
const h1Tag = document.querySelector('h1');
const button = document.getElementById('btn');
const ul = document.getElementById("list");
const btnRem = document.getElementById("btnRemove");
let id = 0
btnRem.addEventListener("click", () => {
    console.log(document.getElementById(id));
})

button.addEventListener("click", addLiItem)
function addLiItem () {
    const li = document.createElement("li")
    li.innerText = Math.random() * 10;
    li.id = id++;
    ul.appendChild(li);
}
// const pTag = document.querySelector('#idsel')
// console.log(pTag);

// h1Tag.innerText = "Hello from JS side"
// console.log(h1Tag)
// const ulLi = document.querySelector('#firstList');
// console.log(ulLi);
// const UlWIthID = document.getElementById('firstList');
// console.log(UlWIthID)
h1Tag.addEventListener("click", () => {
    console.log("h1 is clicked");
})
h1Tag.addEventListener("mouseenter", () => {
    console.log("mouse entered on the h1 area");
})

