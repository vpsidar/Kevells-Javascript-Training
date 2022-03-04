const button = document.getElementById('b1');
const button2 = document.getElementById('b2');
const fDiv = document.getElementById('mydiv');
const sDiv = document.getElementById('second_div');
const myinput = document.getElementById('myinput');
const h1 = document.getElementById('random');
button.addEventListener('click', handleMyClick)
button.removeEventListener('click',handleMyClick)
// both have to follow with same argument
// button2.addEventListener('click', removeB1Event);

// function removeB1Event() {
//     button.removeEventListener('click',handleMyClick, {capture: false})
// }
fDiv.addEventListener('click', handleFirstDivClick, true)
sDiv.addEventListener('keypress', handleSecondDivClick, true)

myinput.addEventListener('keypress', (event) => {
    event.preventDefault()
    h1.innerText = Math.random();
    console.log('event')
})
//form -> 

function handleMyClick(event) {
    h1.innerText = Math.random();
    console.log('button')
    // alert('From Button')
}
function handleFirstDivClick(event) {
    console.log('first div')
    fDiv.style = 'background-color: yellow'
}
function handleSecondDivClick(event) {
    event.stopPropagation();
    sDiv.style = 'background-color: green'
    console.log('second div');
}
// button.onclick = handleMyClick