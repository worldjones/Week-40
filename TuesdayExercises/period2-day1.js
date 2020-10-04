// Exercise 1
let names = ["Taric", "Rumble", "Darius", "Janna", "Nick"];

//a
let namesFiltered = names.filter(name => name.includes("a"));
console.log(namesFiltered)

//b
let namesReversed = names.map(name => name.split("").reverse().join(""));
console.log(namesReversed)

//Exercise 2
//a
function myFilter(callback, array) {
    let arrayCopy = [];
    array.forEach(element => {
        const newItem = callback(element)
        if(newItem != undefined) {
            arrayCopy.push(newItem)
        }        
    });
    return arrayCopy;
}
function findByLetter(name) {
    if(name.includes("a")) {
        return name;
    }
}

console.log(myFilter(findByLetter, names))

//b
function myMap(callback, array){
    let arrayCopy = []
    array.forEach(element => {
        const newItem = callback(element)
        arrayCopy.push(newItem)
    });
    return arrayCopy;
}

function reverseName(name) {
    return name.split("").reverse().join("");
}

console.log(myMap(reverseName, names))

//Exercise 3
//a
var numbers = [1,3,5,10,11];

var result = numbers.map(function (number, index) {
    let newNumber = numbers[index+1]+ number;
    if (isNaN(newNumber)) {
        return number;
    } else {
        return newNumber;
    }
})
console.log(result)

//b
let namesA = names.map(name => `<a href="">${name}</a>`);
namesA.unshift("<nav>")
namesA.push("</nav>")
let namesAJoined = namesA.join("")
console.log(namesAJoined);

//c
var persons = [{name:"Taric",phone:"1234567"}, {name: "Rumble",phone: "675843"}, {name: "Darius", phone: "98547"},{name: "Janna", phone: "79345"}];
let personsTable = persons.map(person =>
    `<tr><td>${person.name}</td><td>${person.phone}</td></tr>`).join("\n");
console.log(personsTable)

//Exercise 4
//a
var all= ["Taric", "Rumble", "Darius", "Janna"];
let allJoined = all.join("#");
console.log(allJoined)

//b
var numbers = [2, 3, 67, 33];
function myReduce(total, number) {
    return total + number;
}
let sum = numbers.reduce(function(total, number) {
    return total + number;
});
console.log(sum)

//c
var members = [
    {name : "Taric", age: 18},
    {name : "Rumble", age: 35},
    {name : "Darius", age: 25},
    {name : "Janna", age: 22}
];
let avgAge = members.reduce(function(accumulator, member, index, members) {
    let sum = accumulator + member.age;

    if (index === members.length -1) {
        return sum / members.length;
    }
    
    return sum;
}, 0);
console.log(avgAge)

//d
const votes = [ "Biden","Trump","Biden","Biden","Trump","Trump","Biden","None"];

let initialValue = {}
let voteResult = votes.reduce(function(accumulator, vote) {
    if (!accumulator[vote]) {
        accumulator[vote] = 1;
    } else {
        accumulator[vote] = accumulator[vote] + 1;
    }
    return accumulator;
}, initialValue);

console.log(voteResult)
