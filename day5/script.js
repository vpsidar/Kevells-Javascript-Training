console.log('hello world');
const ar1 = [1,2,3];
const ar2 = [4,5,6];
const ar3 = [...ar1, ...ar2];
// ar3 = ar1;
// for(let i=0; i<ar2.length; i++ ) {
//     ar3.push(ar2[i])
// }

console.log(ar3);

const obj1 = {
    name: 'vijay'
}
const obj2 = {
    name: 'Hari',
    age: 25
}
const ob3 = {...obj2, ...obj1}
console.log(ob3)

function likeOlderWay(arg) {
    console.log(arg);
}
//Arrow fn = >es6
const aLikeFunction = (arg1, arg2, arg3) => {
    console.log(arg1,arg2,arg3)

}

const singleParam = arg => arg*2

console.log(singleParam(22))
likeOlderWay('From Normal')



