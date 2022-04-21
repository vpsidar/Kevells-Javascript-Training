// function along with its lexical scope bundled together forms a clousers

function x() {
    let a = 10;
    function y () {
        console.log(a);
    }
    a = 100;
    return y;
}
let z = x();
console.log(z)  // function y 
z(); // a= 10 