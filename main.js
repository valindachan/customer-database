// console.log(customers)
let header = document.getElementById("header")
header.innerHTML = "Internal Company Directory"

let directory = document.getElementById("directory")

// console.log(directory)

for (var i = 0; i < 3; i++) {
  // Create a row for the first four profiles
  let row = document.createElement("div")
  row.classList.add("row")
  directory.appendChild(row)

  // Create a row for the first four profiles
  row.classList.add("row")
  directory.appendChild(row)

  for (var j = 0; j < customers.results.length; j++) {
    let personInfo = customers.results[j]
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
}
// console.log(directory)

console.log(directory)
