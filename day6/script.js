// 
function getMeData() {
    return fetch('/day6/data.json') // return the remote server data
}

// Pending
// Resolved
// Rejected
console.log((getMeData()));
const myPromiseObject = getMeData();
// console.log(myPromiseObject);
myPromiseObject.then((result) => {
    console.log('Passed', 0)
     return result.json();  
}).catch((er) => {}).then((result1) => {
    console.log("Passed", 1);
    return "first data"
}).then((result2) => {
    console.log("Passed", 2);
    throw new Error("oh got the error");
}).then((result3) => {
    console.log("Passed", 3);
}).catch((error) => {
    console.log("someone thrown an error")
}).then((result4) => {
    console.log("Passed", 4);
})


