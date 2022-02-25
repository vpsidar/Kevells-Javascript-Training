const hElement = document.getElementById('counter');
const ulElement = document.getElementById('list-item');
const addBtn = document.getElementById('addItemBtn');
const removeBtn = document.getElementById('removeItemBtn');
console.log(ulElement);
let counter = 0;

addBtn.addEventListener('click', function(){
    counter++;
    const lItem =  document.createElement('li');
    lItem.setAttribute('data-counter',counter) 
    lItem.innerHTML = 'content' + counter;
    ulElement.appendChild(lItem);
    hElement.innerHTML = counter;
})

removeBtn.addEventListener('click', function() {
    const rItem = document.querySelector('[data-counter="'+counter+'"]');
    rItem.remove();
    counter--;
    hElement.innerHTML = counter;
})

const contentElement = document.getElementById('content');
const newItem = document.createElement('div');
newItem.setAttribute('class','title')
newItem.style.background = 'red';
newItem.style.fontSize = '40px';
newItem.innerHTML = "Hello WOrld";
contentElement.appendChild(newItem)
console.log(contentElement);

ulElement.style.color = 'yellow';

// custom attribute data-*

