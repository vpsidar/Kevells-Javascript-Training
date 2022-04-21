console.log("my script");

 const myV1 = function myFunction(num) {
    console.log('executed my func', num);
    return 5000;
}

const myV2 = (num1 ,num2) =>  {num1 + num2;}


const fetchData = async () => {
   const res = await fetch('/batch2day1/day2/data.json').then(res => res.json());
   console.log(res);
}

const testData = () => {
    let m = 10
    console.log(m);
    m = 12;
    console.log(m);
    m= 20;
    console.log(20);
}
testData();

fetchData();
const h1 = document.querySelector('h1');
h1.addEventListener("click", () => {
    console.log('hello world');
})