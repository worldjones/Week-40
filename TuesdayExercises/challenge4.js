var members = [
    { name: "Jonas", age: 20, gender : "male" },
    { name: "Per", age: 32, gender : "male" },
    { name: "Sona", age: 22,  gender : "female" },
    { name: "Jens", age: 19, gender : "male" }]
  
  const tableRows = members.map(member =>`
    <tr>
    <td>${member.name}</td>
    <td>${member.age}</td>
    <td>${member.gender}</td>
    </tr>`
    ).join("\n")

  console.log(tableRows)
  