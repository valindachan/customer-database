// console.log(customers)
let header = document.getElementById("header")
header.innerHTML = "Internal Company Directory"

let directory = document.getElementById("directory")

// console.log(directory)

for (var j = 0; j < customers.results.length; j++) {
  // for (var i = 0; i < 3; i++) {
  // Create a container for the first four profiles
  let container = document.createElement("div")
  container.classList.add("container")
  directory.appendChild(container)

  // Create a container for the profiles
  container.classList.add("container")
  directory.appendChild(container)

  let personInfo = customers.results[j]
  // let personSlimInfo = `${personInfo.name.first} ${personInfo.name
  //   .last} ${personInfo.email} ${personInfo.location.street} ${personInfo
  //   .location.city} ${personInfo.location.state} ${personInfo.location
  //   .postcode}`

  let picture = personInfo.picture.large
  let name = `${personInfo.name.first} ${personInfo.name.last}`
  let email = personInfo.email
  let address = `<ul>${personInfo.location.street} <li> ${personInfo.location
    .city} ${personInfo.location.state} ${personInfo.location.postcode} </ul>`
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

  container.appendChild(image)
  container.appendChild(nameContent)
  container.appendChild(emailContent)
  container.appendChild(addressContent)
  container.appendChild(phoneContent)
  container.appendChild(ssnContent)
}
// }
// console.log(directory)

console.log(directory)
