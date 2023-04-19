
// Exercise 6
function validate() {

	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById('fAddress');
	const fLastName = document.getElementById('fLastN');
	const fPassword = document.getElementById('fPassword');
	const fPhone = document.getElementById('fPhone');


	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	const errorAddress = document.getElementById('errorAddress');
	const errorLastName = document.getElementById('errorLastN');
	const errorPassword = document.getElementById('errorPassword');
	const errorPhone = document.getElementById('errorPhone');



	const namePattern = /^[A-Z][a-z]{2,}$/;
	let checkName = namePattern.test(fName.value);

	const lastNamePattern = /^[A-Z][a-z]{2,}$/;
	let checkLastName = lastNamePattern.test(fLastName.value);

	const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	let checkEmail = emailPattern.test(fEmail.value);

	const passwordPattern = /^[a-zA-Z0-9]{4,8}$/;
	let checkPassword = passwordPattern.test(fPassword.value);

	const phonePattern = /^[0-9]{9}$/;
	let checkPhone = phonePattern.test(fPhone.value);

	// const addressPattern = /^[a-zçA-ZÇ]+(?:\s[a-zçA-ZÇ]+)?$/;
	// let checkAddress = addressPattern.test(fAddress.value);
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || checkName == false){
		errorName.style.display = 'initial';
		fName.classList.add("is-invalid");
		error++;
	} else {
		fName.classList.remove("is-invalid");
		fName.classList.add("is-valid")
		errorName.style.display = 'none';
	}

	if(fEmail.value == "" || checkEmail == false){
		errorEmail.style.display = 'initial';
		fEmail.classList.add("is-invalid");

		error++;
	} else {
		fEmail.classList.remove("is-invalid");
		fEmail.classList.add("is-valid");
		errorEmail.style.display = 'none';


	}

	if (fAddress.value == "" ) {
		errorAddress.style.display = 'initial';
		fAddress.classList.add("is-invalid");
		error++;

	} else {
		fAddress.classList.remove("is-invalid");
		fAddress.classList.add("is-valid");
		errorAddress.style.display = 'none';



	}
	if (fLastName.value == "" || checkLastName == false) {
		errorLastName.style.display = 'initial';
		fLastName.classList.add("is-invalid")
		error++;
	} else{
		fLastName.classList.remove("is-invalid");
		fLastName.classList.add("is-valid");
		errorLastName.style.display = 'none';

	}
	if (fPassword.value == "" || checkPassword == false) {
		errorPassword.style.display = 'initial';
		fPassword.classList.add("is-invalid");
		error++;
	} else {
		fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-valid");
		errorPassword.style.display = 'none';

	}
	if (fPhone.value == "" || checkPhone == false) {
		errorPhone.style.display = 'initial';
		fPhone.classList.add("is-invalid");
		error++;
	} else {
		fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-valid");
		errorPhone.style.display = 'none';
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}
}
