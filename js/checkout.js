
// Exercise 7
let error = 0;

function validate() {
	validateName();
	validateEmail();
	validateAddress();
	validateLastN();
	validatePassword();
	validatePhone();

	if(error>0){
		e.preventDefault();
		alert("Error");

	}else{
		alert("OK");
	}
	
}
// Validate fields entered by the user: name, phone, password, and email
function validateName () {
	let fName = document.getElementById("fName");
	let errorName = document.getElementById("errorName");

	if (fName.value.length < 3 || !/^[a-zA-Z]+$/.test(fName.value)) {
		fName.classList.add('is-invalid');
		errorName.style.display = 'block';
		error++;
	  } else {
		fName.classList.remove('is-invalid');
		errorName.style.display = 'none';
	  }
}

function validateEmail() {
	let fEmail = document.getElementById("fEmail");
	let errorEmail = document.getElementById("errorEmail");  

	if (fEmail.value.length < 3 || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(fEmail.value))) {
		fEmail.classList.add('is-invalid');
		errorEmail.style.display = 'block';
		error++;
	  } else {
		fEmail.classList.remove('is-invalid');
		errorEmail.style.display = 'none';
	  }
}
	
function validateAddress() {
	let fAddress = document.getElementById("fAddress");
	let errorAddress = document.getElementById("errorAddress");

	if (fAddress.value.length < 3) {
		fAddress.classList.add('is-invalid');
		errorAddress.style.display = 'block';
		error++;
	  } else {
		fAddress.classList.remove('is-invalid');
		errorAddress.style.display = 'none';
	  }
}

function validateLastN() {
	let fLastN = document.getElementById("fLastN");
	let errorLastN = document.getElementById("errorLastN");

	if (fLastN.value.length < 3 || !/^[a-zA-Z]+$/.test(fLastN.value)) {
		fLastN.classList.add('is-invalid');
		errorLastN.style.display = 'block';
		error++;
	  } else {
		fLastN.classList.remove('is-invalid');
		errorLastN.style.display = 'none';
	  }
}

function validatePassword() {
	let fPassword = document.getElementById("fPassword");
	let errorPassword = document.getElementById("errorPassword");

	if (fPassword.value.length < 4 || !/[a-zA-Z]+\d+/.test(fPassword.value)) {
		fPassword.classList.add('is-invalid');
		errorPassword.style.display = 'block';
		error++;
	  } else {
		fPassword.classList.remove('is-invalid');
		errorPassword.style.display = 'none';
	  }
}

function validatePhone() {
	let fPhone = document.getElementById("fPhone");
	let errorPhone = document.getElementById("errorPhone");
	
	if (fPhone.value.length !== 9 || isNaN(fPhone.value)) {
		fPhone.classList.add('is-invalid');
		errorPhone.style.display = 'block';
		error++;
	  } else {
		fPhone.classList.remove('is-invalid');
		errorPhone.style.display = 'none';
	  }
}