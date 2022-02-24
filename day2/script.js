console.log('hello world');
let persons = [];
for(let i = 0; i<100; i++) {
    persons.push({name:'persons'+i, age: i, address: 'Address'+ i})
}
console.log(persons);
function personsArrayLength() {
    console.log('length of person array is', persons.length);
}

function removeItemFromSpecificPosition(position) {
    persons.splice(position,1);
    console.log('successfull removed the item from position', position);
}

function removeAllItemFromPersons() {
    persons.length = 0
}

personsArrayLength();

// i am removing item form 15 position
removeItemFromSpecificPosition(15)
console.log('persons', persons);
removeAllItemFromPersons()
console.log('persons', persons);
