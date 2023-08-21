
// Exercise 6

function validate() {
	var error = 0;

	// Object with valid strings

	const VALEXP = {
		firstName: /^[a-z]{3,15}$/i,
		lastName:  /^[a-z]{3,15}$/i,
		eMail:	   /^[\w.-]+@[a-z0-9-]+\.[a-z0-9-.]+/i,
		password:  /^[a-z0-9]{3,20}$/i,
		address:   /^[a-z]{3,15}$/i,
		phoneNumber: /^\d{9,13}$/ 			
	}

	
	// Get the input fields

	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements

	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress");  
	var errorLastN = document.getElementById("errorLastN");  
	var errorPassword = document.getElementById("errorPassword");  
	var errorPhone = document.getElementById("errorPhone");
	
	// Get the form and prevent browser to send it to the server

	let form=document.getElementById("form");
	form.addEventListener("submit", (event) => {
		event.preventDefault();
	})


	// Validate fields entered by the user: name, phone, password, and email

	if (fName.value == "" || (!VALEXP.firstName.test(fName.value))){
		error++;
		fName.classList.add("is-invalid");
		fName.classList.remove("is-valid");
	} else {
		fName.classList.add("is-valid");
		fName.classList.remove("is-invalid");
	}

	if (fLastN.value == "" || (!VALEXP.lastName.test(fLastN.value))){
		error++;
		fLastN.classList.add("is-invalid");
		fLastN.classList.remove("is-valid");
	} else {
		fLastN.classList.add("is-valid");
		fLastN.classList.remove("is-invalid");
	}

	if (fEmail.value == "" || (!VALEXP.eMail.test(fEmail.value))){
		error++;
		fEmail.classList.add("is-invalid");
		fEmail.classList.remove("is-valid");
	} else {
		fEmail.classList.add("is-valid");
		fEmail.classList.remove("is-invalid");
	}

	if (fPassword.value == "" || (!VALEXP.password.test(fPassword.value))){
		error++;
		fPassword.classList.add("is-invalid");
		fPassword.classList.remove("is-valid");
	} else {
		fPassword.classList.add("is-valid");
		fPassword.classList.remove("is-invalid");
	}

	if (fPhone.value == "" || (!VALEXP.phoneNumber.test(fPhone.value))){
		error++;
		fPhone.classList.add("is-invalid");
		fPhone.classList.remove("is-valid");
	} else {
		fPhone.classList.add("is-valid");
		fPhone.classList.remove("is-invalid");
	}

	if (fAddress.value == "" || (!VALEXP.address.test(fAddress.value))){
		error++;
		fAddress.classList.add("is-invalid");
		fAddress.classList.remove("is-valid");
	} else {
		fAddress.classList.add("is-valid");
		fAddress.classList.remove("is-invalid");
	}


	if(error>0){
		alert("Hi ha algun error. Introdueix les dades correctes sietplau");
	}else{
		alert("Tot Correcte");
	}

}
