var members = [
    { name: "Jonas", age: 20, gender : "male" },
    { name: "Per", age: 32, gender : "male" },
    { name: "Sona", age: 22,  gender : "female" },
    { name: "Jens", age: 19, gender : "male" }]
   
   
  let jonas = { name: "Jonas", age: 20, gender: "male" }
   
  function addMayDriveProperty(member) {
    let clone = { ...member }
    for (const [key, value] of Object.entries(clone)) {
      if (key === "age" && value > 21) {
        clone.mayDrive = true
      }
      else {
        clone.mayDrive = false
      }
    }
    return clone;
  }
  console.log(jonas)
  let newJonas = addMayDriveProperty(jonas)
  console.log(jonas)
  console.log(newJonas)