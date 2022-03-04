const b1 = document.getElementById('b1');
const fdiv = document.getElementById('f1');
const sdiv = document.getElementById('f2');

b1.addEventListener('click', () => {
    console.log('b1 clicked')
})

fdiv.addEventListener('keypress', () => {
    console.log('f1 clicked')
})
sdiv.addEventListener('click', () => {
    console.log('s1 clicked')
})