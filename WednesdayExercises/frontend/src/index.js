import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import userFacade from "./userFacade"
import jokeFacade from "./jokeFacade"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
function makeListItems() {
  const jokes = jokeFacade.getJokes();
  let jokeList = jokes.map(joke => `<li>${joke}</li>`).join("")
  document.getElementById("jokes").innerHTML = jokeList;
}
makeListItems()

function jokeById() {
  let singleJokeNumberInputBtn = document.getElementById("singleJokeNumberInputBtn");
  singleJokeNumberInputBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let singleJokeNumberInput = document.getElementById("singleJokeNumberInput");
    const joke = jokeFacade.getJokeById(singleJokeNumberInput.value);
    document.getElementById("singleJoke").innerHTML = joke;
  })
}
jokeById()

function addJoke() {
  let addJokeTextInputBtn = document.getElementById("addJokeTextInputBtn");
  addJokeTextInputBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let addJokeTextInput = document.getElementById("addJokeTextInput");
    jokeFacade.addJoke(addJokeTextInput.value);
    makeListItems()
  })
}
addJoke()


/* JS For Exercise-2 below */
  let fetchQuoteBtn = document.getElementById("fetchQuoteBtn");
  fetchQuoteBtn.addEventListener('click', (event) => {
    event.preventDefault();    
    fetchQuote();    
  })

  setInterval(fetchQuote(), 3600000);

  function fetchQuote() {
    let url = 'https://studypoints.info/jokes/api/jokes/period/hour';
      fetch(url)
        .then(res => res.json())
        .then(data => {
          let fetchedQuote = document.getElementById("fetchedQuote");
          fetchedQuote.innerHTML = data.joke;
        });
  }



/* JS For Exercise-3 below */
function makeUserTable() {
  userFacade.getUsers()
  .then(users => {
    const userRows = users.map(user => `
    <tr>
      <td>${user.id}</td>
      <td>${user.age}</td>
      <td>${user.name}</td>
      <td>${user.gender}</td>
      <td>${user.email}</td>
    </tr>
    `).join("");
    document.getElementById("allUserRows").innerHTML = userRows;
  })
}
makeUserTable()

let reloadData = document.getElementById("reloadData");
reloadData.addEventListener('click', (event) => {
  event.preventDefault()
  makeUserTable()
})

let singleUserIdInputBtn = document.getElementById("singleUserIdInputBtn");
singleUserIdInputBtn.addEventListener('click', (event) => {
  event.preventDefault()

  let singleUserIdInput = document.getElementById("singleUserIdInput");
  document.getElementById("errorGet").innerHTML = ""

  userFacade.getUser(singleUserIdInput.value)
  .then(user => {
    const userList = `
    <ul><li>Id: ${user.id}</li><li>Age: ${user.age}</li><li>Name: ${user.name}</li><li>Gender: ${user.gender}</li><li>Email: ${user.email}</li></ul>`
    document.getElementById("singleUser").innerHTML = userList;    
  }).catch(err => {
    if(err.status) {
      err.fullError.then(e => document.getElementById("errorGet").innerHTML = e.msg)
    } else {console.log("Network error"); }
    });
})

let addUserBtn = document.getElementById("addUserBtn");
addUserBtn.addEventListener('click', (event) => {
  event.preventDefault()

  let age = document.getElementById("userAgeInput").value;
  let name = document.getElementById("userNameInput").value;
  let gender = document.getElementById("userGenderInput").value;
  let email = document.getElementById("userEmailInput").value;

  const newUser = {
    age,
    name,
    gender,
    email
  }

  document.getElementById("errorAdd").innerHTML = ""

  userFacade.addUser(newUser)
  .then(makeUserTable())
  .catch(err => {
    if(err.status) {
      err.fullError.then(e => document.getElementById("errorAdd").innerHTML = e.msg)
    } else {console.log("Network error"); }
    });
});

let editUserBtn = document.getElementById("editUserBtn");
editUserBtn.addEventListener('click', (event) => {
  event.preventDefault()

  let id = document.getElementById("userEditIdInput").value;
  let age = document.getElementById("userEditAgeInput").value;
  let name = document.getElementById("userEditNameInput").value;
  let gender = document.getElementById("userEditGenderInput").value;
  let email = document.getElementById("userEditEmailInput").value;

  const editedUser = {
    id,
    age,
    name,
    gender,
    email
  }

  document.getElementById("errorEdit").innerHTML = ""

  userFacade.editUser(editedUser)
  .then()
  .catch(err => {
    if(err.status) {
      err.fullError.then(e => document.getElementById("errorEdit").innerHTML = e.msg)
    } else {console.log("Network error"); }
    });
});

let deleteUserIdInputBtn = document.getElementById("deleteUserIdInputBtn");
deleteUserIdInputBtn.addEventListener('click', (event) => {
  event.preventDefault()

  let deleteUserIdInput = document.getElementById("deleteUserIdInput");
  document.getElementById("errorDelete").innerHTML = ""

  userFacade.deleteUser(deleteUserIdInput.value)
  .then()
  .catch(err => {
    if(err.status) {
      err.fullError.then(e => document.getElementById("errorDelete").innerHTML = e.msg)
    } else {console.log("Network error"); }
    });
})

/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



