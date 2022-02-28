// some array methods
// Map Function
const persons = [{'name':'Ram', age:20},{'name':'Ginni', age:25},{'name':'Raju', age:25},{'name':'Amar', age:22}]
const addBtn = document.getElementById('addBtn');
const personInputElement = document.getElementById('personName');
const ageInputElement = document.getElementById('age');
const ulElement = document.getElementById('person-list');
addBtn.addEventListener('click', () =>{
    console.log(personInputElement.value);
    console.log(ageInputElement.value);
    const pObj = {name: personInputElement.value, age: ageInputElement.value}
    const lObj = document.createElement('li');
    lObj.innerHTML = "<b> Name :" + personInputElement.value + ", Age : " + ageInputElement.value + "</b>"
    ulElement.appendChild(lObj);
    persons.push(pObj);
    console.log(persons);
})

const ar1 = [1,2,3];
const ar2 = ar1.map(function (element) {
    return element ** 2
})

const ar3 = ar1.map((element) =>  element ** 2)
console.log('ar2',ar2);
console.log('ar3',ar3);
console.log('ar1', ar1);

///  filter 

const numbers = [1,2,3,4,5,6,7,8,9,10];
const ar4 = numbers.filter((element)=>{
    return element >6
})


console.log(ar4);

// find
const findItem = persons.filter((element) => element.age ===25);
console.log(findItem) 