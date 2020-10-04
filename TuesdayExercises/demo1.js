//Chal1
//let car = {make: "ford", year: 2008}
//console.log(car) //1

//let carCopy = car;
//let carClone = {...car}
//console.log(carCopy) //2

//carClone.year = 2018;

//console.log(car) //3
//console.log(carClone) //4

//Chal2
var numbers = [1, 3, 5, 10, 11];

function makeListItem(number) {
  return `<li>${number}</li>`
}

function changeSign(number) {
    return number * -1;
}

function myMap(callback, array){
    let arrayCopy = []
    array.forEach(element => {
        const newItem = callback(element)
        arrayCopy.push(newItem)
    });
    return arrayCopy;
}

//let listItems = numbers.map(makeListItem); //I don’t exist :-( 
let listItems = myMap(changeSign, numbers).join("");

console.log(listItems)
