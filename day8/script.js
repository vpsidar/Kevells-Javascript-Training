// async function fetchAll () {
//     const respons1 = fetch('/day8/data1.json');
//     const respons2 =  fetch('/day8/data2.json');
//     const respons3 =  fetch('/day8/data3.json');

//     const allcombined = await Promise.all([respons1,respons2,respons3])
//     const responses = await allcombined.map((value) => {
//         value.json()
//     });


//     console.log(responses);
// }

// fetchAll()

// Prototype inheritance

// const a = {prop1 : 1}
// // const b = {prop2 : 10}
// // const c = {prop3 : 100}
// // const d = {prop4 : 1000}

// // d.__proto__ = c;
// // c.__proto__ = b;
// // b.__proto__ = a;
// // console.log(d.get);

// const b = Object.create(a)

// function Car() {
//     this.fuel = 100;
//     this.wheels = 4;
//     this.brand = 'Tata'
// }
// Car.prototype.addFuel = function (amount) {
//     this.fuel = amount
// }
// Car.prototype.addBrand = function(brandName) {
//     this.brand = brandName
// }
// Car.prototype.globalVar = 'ANy Value'
// // Car(); ==> exposed to my window object
// const obj = new Car();
// const obj2 = new Car();

function Person () {
    // this.name = 'ANy Name'
    this.age = 0
    this.address = "Any Address"
}

Person.prototype.addPerson = function (name, age, address) {
    this.name = name
    this.age = age
    this.address = address
}

Person.prototype.name = 'from prototype';

let obj1 = new Person()
// obj1.addPerson('VIjay 1', 25, 'Madurai')
console.log(obj1);
let person = []
for(let i = 1; i <= 100; i++) {
    let pr = new Person();
    pr.addPerson('Person'+ i, 20+ i, 'Address'+i)
    person.push(pr)
}

console.log(person);









