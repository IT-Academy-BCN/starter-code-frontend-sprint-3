
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	let errorAddress = document.getElementById("errorAddress");
	let errorLastN = document.getElementById("errorLastN");
	let errorPassword = document.getElementById("errorPassword");
	let errorPhone = document.getElementById("errorPhone");
	
	// Validate fields entered by the user: name, phone, password, and email

	//name and last name only letters
	let lettersOnly = /^[A-Za-z]+$/;
	if (!fName.value.match(lettersOnly)){
		document.getElementById("errorName").innerHTML = "This field should contain letters only";
		fName.style.backgroundColor = "red";
		error++;}
	if (!fLastN.value.match(lettersOnly)) {
		document.getElementById("errorLastN").innerHTML = "This field should contain letters only";
		fLastN.style.backgroundColor = "red";
		error++;}

	//numbers only
	let numbersOnly = /^[0-9]+$/;
	if (!fPhone.value.match(numbersOnly)){
		document.getElementById("errorPhone").innerHTML = "This field should contain numbers only";
		fPhone.style.backgroundColor = "red";
		error++;}

	//numbers and letters 
	if (fPassword.value.match(lettersOnly) || fPassword.value.match(numbersOnly)) {
		document.getElementById("errorPassword").innerHTML = "This field should contain numbers and letters";
		fPassword.style.backgroundColor = "red";
		error++;
	}

	//email format
	let correctFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (!fEmail.value.match(correctFormat)) {
		document.getElementById("errorEmail").innerHTML = "Please use the correct email format";
		fEmail.style.backgroundColor = "red";
		error++;
	}
	
	//minimum length 3
	if (fName.value.length < 3) {
		document.getElementById("errorName").innerHTML = "This field is required and must have, at least, 3 characters";
		fName.style.backgroundColor = "red";
		error++;
	}

	if (fEmail.value.length < 3) {
		document.getElementById("errorEmail").innerHTML = "This field is required and must have, at least, 3 characters";
		fEmail.style.backgroundColor = "red";
		error++;
	}

	if (fAddress.value.length < 3) {
		document.getElementById("errorAddress").innerHTML = "This field is required and must have, at least, 3 characters";
		fAddress.style.backgroundColor = "red";
		error++;
	}

	if (fLastN.value.length < 3) {
		document.getElementById("errorLastN").innerHTML = "This field is required and must have, at least, 3 characters";
		fLastN.style.backgroundColor = "red";
		error++;
	}

	if (fPassword.value.length < 3) {
		document.getElementById("errorPassword").innerHTML = "This field is required and must have, at least, 3 characters";
		fPassword.style.backgroundColor = "red";
		error++;
	}

	if (fPhone.value.length < 3) {
		document.getElementById("errorPhone").innerHTML = "This field is required and must have, at least, 3 characters";
		fPhone.style.backgroundColor = "red";
		error++;
	}

	// all fields required 
	if(fName.value == ""){
		document.getElementById("errorName").innerHTML = "This field is required and must have, at least, 3 characters";
		fName.style.backgroundColor = "red";
		error++;
	}

	if(fEmail.value == ""){
		document.getElementById("errorEmail").innerHTML = "This field is required and must have, at least, 3 characters";
		fEmail.style.backgroundColor = "red";
		error++;
	}

	if(fAddress.value == ""){
		document.getElementById("errorAddress").innerHTML = "This field is required and must have, at least, 3 characters";
		fAddress.style.backgroundColor = "red";
		error++;
	}

	if(fLastN.value == ""){
		document.getElementById("errorLastN").innerHTML = "This field is required and must have, at least, 3 characters";
		fLastN.style.backgroundColor = "red";
		error++;
	}

	if(fPassword.value == ""){
		document.getElementById("errorPassword").innerHTML = "This field is required and must have, at least, 3 characters";
		fPassword.style.backgroundColor = "red";
		error++;
	}

	if(fPhone.value == ""){
		document.getElementById("errorPhone").innerHTML = "This field is required and must have, at least, 3 characters";
		fPhone.style.backgroundColor = "red";
		error++;
	}

	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
