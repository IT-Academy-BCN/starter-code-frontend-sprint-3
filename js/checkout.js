
// Exercise 7
function validate() {

	let error = 0;

	// RegExp
	let regExpName = /^[-'a-zA-ZÀ-ÿ\s]{3,}$/i;
	let regExpEmail = /^[-'a-zA-Z0-9_+]+@[-'a-zA-Z0-9_+]+\.[a-z]{2,3}$/i;
	let regExpPassword = /^.{4,8}$/;
	let regExpAdress = /^.{3,}$/;
	let regExhPhone = /^\d{9}$/;

// Get the input fields
	let fName = document.getElementById("fName");
	let fLastN = document.getElementById("fLastN");
	let fEmail = document.getElementById("fEmail");
	let fpassword = document.getElementById("fPassword");
	let fAddress = document.getElementById("fAddress");
	let fPhone = document.getElementById("fPhone");

	// Validate fields entered by the user: name, phone, password, and email

	//Versió amb bucle for i classList, i amb classes "is-valid" i "is-invalid" de Bootstrap
	let validation = [regExpName, regExpName, regExpEmail, regExpPassword, regExpAdress, regExhPhone, fName, fLastN, fEmail, fpassword, fAddress, fPhone];
	
	for (i = 0; i < 6; i++) {

		if (validation[i+6].value == "" || validation[i].test(validation[i+6].value) == false) {

			validation[i+6].classList.add("is-invalid");
			validation[i+6].classList.remove("is-valid");
			error++;

		}else{

			validation[i+6].classList.add("is-valid");
			validation[i+6].classList.remove("is-invalid");
		}

	}

	/*
	//Versió amb elements del DOM

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorLastN = document.getElementById("errorLastN");
	let errorEmail = document.getElementById("errorEmail");
	let errorPassword = document.getElementById("errorPassword");
	let errorAddress = document.getElementById("errorAddress");
	let errorPhone = document.getElementById("errorPhone");
	
	// Agafem els elements de no-error
	let correctName = document.getElementById("correctName");
	let correctLastN = document.getElementById("correctLastN");
	let correctEmail = document.getElementById("correctEmail");
	let correctPassword = document.getElementById("correctPassword");
	let correctAddress = document.getElementById("correctAddress");
	let correctPhone = document.getElementById("correctPhone");

	if(fName.value == "" || regExpName.test(fName.value) == false){

		fName.style.borderColor = "red";
		errorName.style.display = "block";
		correctName.style.display = "none";
		error++;

	}else{
		fName.style.borderColor = "green";
		errorName.style.display = "none";
		correctName.style.display = "block";
	}

	if(fLastN.value == "" || regExpName.test(fLastN.value) == false){

		fLastN.style.borderColor = "red";
		errorLastN.style.display = "block";
		correctLastN.style.display = "none";
		error++;

	}else{
		fLastN.style.borderColor = "green";
		errorLastN.style.display = "none";
		correctLastN.style.display = "block";
	}

	if(fEmail.value == "" || regExpEmail.test(fEmail.value) == false){

		fEmail.style.borderColor = "red";
		errorEmail.style.display = "block";
		correctEmail.style.display = "none";
		error++;

	}else{
		fEmail.style.borderColor = "green";
		errorEmail.style.display = "none";
		correctEmail.style.display = "block";
	}

	if(fpassword.value == "" || regExpPassword.test(fpassword.value) == false){

		fpassword.style.borderColor = "red";
		errorPassword.style.display = "block";
		correctPassword.style.display = "none";
		error++;

	}else{
		fpassword.style.borderColor = "green";
		errorPassword.style.display = "none";
		correctPassword.style.display = "block";
	}

	if(fAddress.value == "" || regExpAdress.test(fAddress.value) == false){

		fAddress.style.borderColor = "red";
		errorAddress.style.display = "block";
		correctAddress.style.display = "none";
		error++;

	}else{
		fAddress.style.borderColor = "green";
		errorAddress.style.display = "none";
		correctAddress.style.display = "block";
	}

	if(fPhone.value == "" || regExhPhone.test(fPhone.value) == false){

		fPhone.style.borderColor = "red";
		errorPhone.style.display = "block";
		correctPhone.style.display = "none";
		error++;

	}else{
		fPhone.style.borderColor = "green";
		errorPhone.style.display = "none";
		correctPhone.style.display = "block";
	}
	*/

	/* if(error > 0){
		alert("Error");

	}else{
		alert("OK");
	} */

}
