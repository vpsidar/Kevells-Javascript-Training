// const arr1 = [1,2,3,4,5,6,7];

// //  const arr3 = [];
// // arr1.forEach((item) => {
// //     arr3.push(item)
// // })
// // arr2.forEach((item) => {
// //     arr3.push(item)
// // })
// // console.log('array1', arr1)
// // console.log('array2', arr2)
// // console.log('array3', arr3)
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
// const KEYNAME = 100; 
// const a = {
//     name: "Ram",
//     KEYNAME,
//     address: "adrres",
//     dob: "20/12/1994",
//     eID: "MAHDJ234",
//     doj: "23/12/2020"
// }
// const b = {
//     name: "John",
//     age: 24
// }
// const d = {
    //     name: "Meera",
    //     anything: "not known"
    // }
    
    // Object.keys(a)
    // const c = {...a,...b, ...d,anything:"known"}
    // console.log(c)
    
    const arr2 = [1,2,3,4,5,6,7,8];
    // arry methods
    const arr3 = arr2.map(function(item) {
        return item**2;
    })
    console.log(arr3);
    console.log(arr2);
    
    

