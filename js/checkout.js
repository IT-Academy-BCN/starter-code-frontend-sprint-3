// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector(".phone");
var name = document.querySelector(".name");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorPhone = document.getElementById("errorPhone");

var letterRegex = /^[A-Za-z]+$/;
var numberRegex = /^[1-9]\d{9}$/

// Exercise 7
function validate() {

let fName = document.getElementById("fName").value
let lName = document.getElementById("fLastN").value
let email = document.getElementById("fEmail").value
let address = document.getElementById("fAddress").value
let password = document.getElementById("fPassword").value
let phone = document.getElementById("fPhone").value

//Validate Name
if(fName.length < 3 || fName.length == "" || !letterRegex.test(fName)){
  errorName.style.display = "block"
  document.getElementById("fName").style.borderColor = "red"
} 

//Validate Last Name
if(lName.length < 3 || lName.length == "" || !letterRegex.test(lName)){
  errorLastN.style.display = "block"
  document.getElementById("fLastN").style.borderColor = "red"
}

//Validate e-Mail
let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
if(!email.match(emailRegex)){
  errorEmail.style.display = "block"
  document.getElementById("fEmail").style.borderColor = "red"

}

//Validate address 

if(address.length < 3 || address.length == ""){
  errorAddress.style.display = "block"
  document.getElementById("fAddress").style.borderColor = "red"
}

//Validate Phone Number

if(phone.length > 9 || phone.length == "" || !phone.value.match(numberRegex) ){
  errorPhone.style.display = "block"
  document.getElementById("fPhone").style.borderColor = "red"

}

//Validate Password 
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_))/
if (!passwordRegex.test(password) || password.length < 4){
  errorPassword.style.display = "block"
  document.getElementById("fPassword").style.borderColor = "red"
} 















}




  // Validate fields entered by the user: name, phone, password, and email
