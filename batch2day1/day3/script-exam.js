const btnA = document.getElementById("btnA");
const btnB= document.getElementById("btnB");
const btnc= document.getElementById("btnC");
const ulList1 = document.getElementById("list1");
const ulList2 = document.getElementById("list2");
let arr1 = [];
let arr2 = [];
btnA.addEventListener("click", () => {
    console.log("clicked btn 1")
    for (let i =0; i<= 10; i++) {
        const nameObj = {name: "name"+ i }
        arr1.push(nameObj);
    }
    arr1.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<b> Name :</b> ${item.name}`
        ulList1.appendChild(li); 
    })
})
btnB.addEventListener("click", () => {
    // console.log("clicked btn 2")
    for (let i =0; i<= 10; i++) {
        const otherDetailsObj = {dob: "dob"+ i, 'address': "address"+ i }
        arr2.push(otherDetailsObj);
    }
    arr2.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<b> Address :</b> ${item.address} Dob : ${item.dob}`
        ulList2.appendChild(li); 
    })
})

btnc.addEventListener("click", mergeArray)
function mergeArray () {
for( let j = 0 ; j <= 10 ; j++) {
    const mergedItem = {...arr1[j],...arr2[j], company: "Kevells"}
    console.log(mergedItem);
}
}

