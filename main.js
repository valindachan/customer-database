// console.log(customers)
let header = document.getElementById("header")
header.innerHTML = "Internal Company Directory"

let directory = document.getElementById("directory")

// console.log(directory)

// for (var i = 0; i < 3; i++) {
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
  let ssn = personInfo.id.value
  // console.log(picture, name, email, address, phone)

  let image = document.createElement("img")
  image.src = picture

  let nameContent = document.createElement("p")
  nameContent.classList.add("name")
  nameContent.innerHTML = name

  let emailContent = document.createElement("p")
  emailContent.classList.add("email")
  emailContent.innerHTML = email

  let addressContent = document.createElement("p")
  addressContent.classList.add("address")
  addressContent.innerHTML = address

  let phoneContent = document.createElement("p")
  phoneContent.classList.add("phone")
  phoneContent.innerHTML = phone

  let ssnContent = document.createElement("p")
  ssnContent.classList.add("ssn")
  ssnContent.innerHTML = ssn

  row.appendChild(image)
  row.appendChild(nameContent)
  row.appendChild(emailContent)
  row.appendChild(phoneContent)
  row.appendChild(ssnContent)
}
// }
// console.log(directory)

console.log(directory)
