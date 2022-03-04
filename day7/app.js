const myName = "Anything";
const age = 24
const btn = document.getElementById('btn');
const h1El = document.getElementById('timer');

const myCOnd = false;

function myCustomPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            h1El.innerHTML = "after some time"

            if(myCOnd) {
                resolve('success')
            } else {
                reject('opps error happend')
            }
        },5000) 
    });
    // return  Promise().resolve('success');
}
async function customError () {
    throw new Error('Opps execution blocked');
}
customError();
console.log(myCustomPromise().then((response) => {
    console.log('got the', response);
}).catch((error) => {
    console.log('this is the thing i will do to handle the error', error)
}));


function add(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a+b);
    })
}
ajax => 

console.log(add(10, 20).then((result) => {
    console.log('the sum of my given value is ', result);
}));
// subtract()
// multiply()
// divide()
// callwithErro () {

// }



