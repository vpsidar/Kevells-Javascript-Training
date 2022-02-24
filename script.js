let person = [];
for (let j=1; j<=100; j++){
    let utilisatrice = {
        name:"person name" + j,
        age:j *1,
        address:"address" + j,
        id:"id" +j,
    }
    person.push(utilisatrice);
   
}
// let Aks=person.splice(23,27)


function removeItemFromSpecificPosition(position) {
    person.splice(position, 1);
}
removeItemFromSpecificPosition(27)
console.log("Length of utilisatrice"+":"+person.length)