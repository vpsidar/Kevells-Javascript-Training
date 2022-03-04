// const favLanguages  = ["html", "css", "javascript", "paython"];

// favLanguages[Symbol.iterator] = () => {
//     let len = favLanguages.length
//     return {
//         next: () => ({
//             value: 'I love' + favLanguages[--len],
//             done: len < 0
//         })
//     }
// }

// const myNumbers = [1,2,3,4,5,6,7];

// myNumbers[Symbol.iterator] = () => {
//     let len = myNumbers.length
//     return {
//         next: () => ({
//             value: myNumbers[--len]**2,
//             done: len < 0
//         })
//     }
// }

// const obj = {
//     something: 'value1',
//     key2: {
//         name: 'vijay' 
//     },
//     newKey : {
//         fname: 'sd'
//     }
// }

// console.log(Object.keys(obj))
// const fLevelKeys = Object.keys(obj)
// for(let i = 0; i < fLevelKeys.length; i++) {
//     if (typeof(obj[fLevelKeys[i]]) === 'object') {
//         console.log('obj values')
//         console.log(Object.keys(obj[fLevelKeys[i]]))
//     } else {
//         console.log(fLevelKeys[i]);
//     }
// }

const myNum = [1, 2, 3, 4, 5];

myNum[Symbol.iterator] = () => {
    let len = myNum.length
    return {
        next: () => ({
            value: myNum[--len] ** 2,
            done: len<0
        })
    }
}

const myLang = ['html', 'css', 'javascript', 'pyhton']
myLang[Symbol.iterator] = () => {
    let len = myLang.length
    return {
        next: () => ({
            value: "I like " + myLang[--len],
            done: len < 0 
        })
    }
}

for (const value of myLang) {
    console.log(vale);
}

