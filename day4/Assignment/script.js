const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
let counter = 0;
let persons = []
function addPerson() {
    counter++
    let person = {name:'Person'+counter, age: 20+counter, address: 'Address'+counter}
    persons.push(person);
}

function removePerson() {
    counter--
    let person = {name:'Person'+counter, age: 20+counter, address: 'Address'+counter}
    
}
