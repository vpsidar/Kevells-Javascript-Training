console.log('Html DOm');
const hEle = document.getElementById('counter');
let counter = 0;
const incBtn = document.getElementById('incrementBtn');
const decBtn = document.getElementById('decrementBtn');

incBtn.addEventListener('click', function() {
    counter++;
    hEle.innerHTML = counter;
})

decBtn.addEventListener('click', function() {
    counter--;
    hEle.innerHTML = counter;
})

const btn2 = document.getElementById('btn2');
const btn5 = document.getElementById('btn5');
btn2.addEventListener('click', function() {
    let value = 15 -2;
    hEle.innerHTML = value
})

btn5.addEventListener('click', function() {
    for(let i = 1; i<= 50; i++) {
        console.log(i);
        hEle.innerHTML = i;
    }
})



// query selector 
// document.querySelector('h1');
// document.querySelectorAll('h1');