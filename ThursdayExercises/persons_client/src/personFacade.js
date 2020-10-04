import SERVER_URL from "./constants.js"

//const URL = "https://worldjones.dk/rest-persons-dto/api/person"
const URL = "https://worldjones.dk/tomcat/rest-persons-dto/api/person"

function handleHttpErrors(res){
  if(!res.ok){
    return Promise.reject({status: res.status, fullError: res.json() })
  }
  return res.json();
 }

 function makeOptions(method, body) {
    var opts =  {
      method: method,
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }
    if(body){
      opts.body = JSON.stringify(body);
    }
    return opts;
   }

function getAllPersons() {
    return fetch(URL + "/all")
        .then(handleHttpErrors)
}

function addPerson(person) {
    const options = makeOptions("POST", person);
    return fetch(URL, options)
        .then(handleHttpErrors)
}

function deletePerson(i) {
    const options = makeOptions("DELETE");
    return fetch(URL + "/" + i, options)
        .then(handleHttpErrors)
}

const personFacade = {
    getAllPersons,
    addPerson,
    deletePerson,
}

export default personFacade;