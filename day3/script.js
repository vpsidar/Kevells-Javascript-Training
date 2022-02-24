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


// query selector 
// document.querySelector('h1');
// document.querySelectorAll('h1');