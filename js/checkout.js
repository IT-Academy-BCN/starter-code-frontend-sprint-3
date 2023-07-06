// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPhone = document.getElementById("fPhone");
	let fPassword = document.getElementById("fPassword");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	let errorAddress = document.getElementById("errorAddress");
	let errorLastN = document.getElementById("errorLastN");
	let errorPhone = document.getElementById("errorPhone");
	let errorPassword = document.getElementById("errorPassword");

	//Regular expresions

	let nameRegex = /^[a-zA-Z]+$/;
	let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let phoneRegex = /^\d+$/;
	let passwordRegex = /^[a-zA-Z]+[0-9]+$/;

	// Validate fields entered by the user: name, phone, password, and email
	/*if(fName.value == "" || fName.value.length < 3 || !nameRegex.test(fName.value)){
		fName.classList.add("is-invalid");
		errorName.style.display = "";
		error++;
	} else {
		fName.classList.add("is-valid");
	}*/


	if (fName.value == "" || fName.value.length < 3 || !nameRegex.test(fName.value)) {
		fName.classList.add("is-invalid");
		errorName.style.display = "";
		error++;
	} else {
		fName.classList.add("is-valid");
	}



	if (fLastN.value == "" || fLastN.value.length < 3 || !nameRegex.test(fLastN.value)) {
		fLastN.classList.add("is-invalid");
		errorLastN.style.display = "";
		error++;
	} else {
		fLastN.classList.add("is-valid");
	}

	if (fEmail.value == "" || fEmail.value.length < 3 || !emailRegex.test(fEmail.value)) {
		fEmail.classList.add("is-invalid");
		errorEmail.style.display = "";
		error++;
	} else {
		fEmail.classList.add("is-valid");
	}

	if (fAddress.value == "" || fAddress.value.length < 3) {
		fAddress.classList.add("is-invalid");
		errorAddress.style.display = "";
		error++;
	} else {
		fAddress.classList.add("is-valid");
	}


	if (fPhone.value == "" || fPhone.value.length < 3 || !phoneRegex.test(fPhone.value)) {
		fPhone.classList.add("is-invalid");
		errorPhone.style.display = "";
		error++;
	} else {
		fPhone.classList.add("is-valid");
	}

	if (fPassword.value == "" || fPassword.value.length < 3 || !passwordRegex.test(fPassword.value)) {
		fPassword.classList.add("is-invalid");
		errorPassword.style.display = "";
		error++;
	} else {
		fPassword.classList.add("is-valid");
	}



	if (error > 0) {
		alert("Error, hay campos que no completan los requisitos.");
	} else {
		alert("OK");
	}

	event.preventDefault()

}