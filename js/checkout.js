
// Get the input fields
//var password = document.querySelector(".password");
//var phone = document.querySelector(".phone");
//var name = document.querySelector(".name");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorPhone = document.getElementById("errorPhone");




// Exercise 7
function validate() {

const form = document.getElementById('mainForm')
    form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event)})


  
let fName = document.getElementById("fName")
let lName = document.getElementById("fLastN")
let email = document.getElementById("fEmail")
let address = document.getElementById("fAddress")
let password = document.getElementById("fPassword")
let phone = document.getElementById("fPhone")

let letterRegex = /^[A-Za-z]+$/;

//Validate Name
if(fName.value.length < 3 || fName.value.length == "" || !letterRegex.test(fName.value)){
  errorName.style.display = "block"
  fName.style.borderColor = "red"
 
} else {
  errorName.style.display = "none"
  fName.style.borderColor = "green"
}

//Validate Last Name
if(lName.value.length < 3 || lName.value.length == "" || !letterRegex.test(lName.value)){
  errorLastN.style.display = "block"
  lName.style.borderColor = "red"
} else {
  errorLastN.style.display = "none"
  lName.style.borderColor = "green"
}

//Validate e-Mail
let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
if(email.value.match(emailRegex)){
  errorEmail.style.display = "none"
  email.style.borderColor = "green"
} else{
  errorEmail.style.display = "block"
  email.style.borderColor = "red"
}

//Validate address 

if(address.value.length < 3 || address.value.length == ""){
  errorAddress.style.display = "block"
  address.style.borderColor = "red"
} else {
  errorAddress.style.display = "none"
  address.style.borderColor = "green"
}

//Validate Phone Number
let numberRegex = /^[0-9]*$/

if(phone.value.length === 9 && phone.value.match(numberRegex) ){
  errorPhone.style.display = "none"
  phone.style.borderColor = "green"
} else {
  errorPhone.style.display = "block"
  phone.style.borderColor = "red"
}

//Validate Password 
let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/
if (passwordRegex.test(password.value)){
  errorPassword.style.display = "none"
  password.style.borderColor = "green"
}
else {
  errorPassword.style.display = "block"
  password.style.borderColor = "red"
}

}




  // Validate fields entered by the user: name, phone, password, and email
