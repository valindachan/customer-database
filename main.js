// console.log(customers)
let header = document.getElementById("header")
header.innerHTML = "Internal Company Directory"

let directory = document.getElementById("directory")
let row = document.createElement("div")

// console.log(directory)

for (var i = 0; i < 3; i++) {
  // Create a row for the first four profiles
  row.classList.add("row")
  directory.appendChild(row)

  // Create a row for the first four profiles
  row.classList.add("row")
}
// console.log(directory)

for (var i = 0; i < customers.results.length; i++) {
  let personInfo = customers.results[i]
  // let personSlimInfo = `${personInfo.name.first} ${personInfo.name
  //   .last} ${personInfo.email} ${personInfo.location.street} ${personInfo
  //   .location.city} ${personInfo.location.state} ${personInfo.location
  //   .postcode}`

  let picture = personInfo.picture.large
  let name = `${personInfo.name.first} ${personInfo.name.last}`
  let email = personInfo.email
  let address = `${personInfo.location.street} ${personInfo.location
    .city} ${personInfo.location.state} ${personInfo.location.postcode}`
  let phone = personInfo.phone
  let ssn = personInfo.id.ssn
  // console.log(picture, name, email, address, phone)

  let image = document.createElement("img")
  image.src = picture

  let nameContent = document.createElement("p")
  nameContent.classList.add("name")
  nameContent.innerHTML = name

  row.appendChild(image)
  row.appendChild(nameContent)
}

directory.appendChild(row)

console.log(directory)
