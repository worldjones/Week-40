import "./style.css"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import personFacade from "./personFacade"
 
function makePersonTable() {
  personFacade.getAllPersons()
  .then(data => {
    const persons = data.all;
    const tableRows = persons.map(person => `
    <tr>
      <td>${person.id}</td>
      <td>${person.fName}</td>
      <td>${person.lName}</td>
      <td>${person.phone}</td>
      <td>${person.street}</td>
      <td>${person.zip}</td>
      <td>${person.city}</td>      
    </tr>
    `).join("");
    document.getElementById("tbody").innerHTML = tableRows;
    document.getElementById("error").innerHTML = "";
  }).catch(err => {
    if(err.status) {
      err.fullError.then(e => document.getElementById("error").innerHTML = e.message)
    } else {console.log("Network error"); }
  });
}
makePersonTable()

let reloadBtn = document.getElementById("reloadBtn");
reloadBtn.addEventListener('click', (event) => {
  event.preventDefault()
  makePersonTable()
})

let addPersonBtn = document.getElementById("addPersonBtn");
addPersonBtn.addEventListener('click', (event) => {
  event.preventDefault()

  let saveBtn = document.getElementById("saveBtn");
  saveBtn.addEventListener('click', (event) => {
    event.preventDefault()

    let fName = document.getElementById("fname").value;
    let lName = document.getElementById("lname").value;
    let phone = document.getElementById("phone").value;
    let street = document.getElementById("street").value;
    let zip = document.getElementById("zip").value;
    let city = document.getElementById("city").value;

    const newPerson = {
      fName,
      lName,
      phone,
      street,
      zip,
      city
    }

    document.getElementById("error").innerHTML = "";

    personFacade.addPerson(newPerson)
    .then(makePersonTable())
    .catch(err => {
      if(err.status) {
        err.fullError.then(e => document.getElementById("error").innerHTML = e.message)
      } else {console.log("Network error"); }
    });
  });  
});




