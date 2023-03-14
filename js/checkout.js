
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	const fName = document.getElementById("fName");
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fLastName = document.getElementById("fLastN");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");   
	
	// Validate fields entered by the user: name, phone, password, and email
	if(/^[a-zA-Z]{3,}[ ]?[a-zA-Z]*$/.test(fName.value)){
		fName.classList.remove('is-invalid')
		fName.classList.add('is-valid')
	} else {
		fName.classList.remove('is-valid')
		fName.classList.add('is-invalid')
		error++
	}
	
	if(/^[a-zA-Z]{3,}[ ]?[a-zA-Z]*$/.test(fLastName.value) ){
		fLastName.classList.remove('is-invalid')
		fLastName.classList.add('is-valid')
	} else {
		fLastName.classList.remove('is-valid')
		fLastName.classList.add('is-invalid')
		error++
	}
	
	if(/^[a-zA-Z0-9]{3,}[@][a-zA-Z]+[.][a-zA-Z]+$/.test(fEmail.value)){
		fEmail.classList.remove('is-invalid')
		fEmail.classList.add('is-valid')
	} else {
		fEmail.classList.remove('is-valid')
		fEmail.classList.add('is-invalid')
		error++
	}
	
	if(/^[a-zA-Z]{3,}[ a-zA-Z0-9]*$/.test(fAddress.value)){
		fAddress.classList.remove('is-invalid')
		fAddress.classList.add('is-valid')
	} else {
		fAddress.classList.remove('is-valid')
		fAddress.classList.add('is-invalid')
		error++
	}
	
	// La contrasenya ha d'incloure números i lletres
	if(/^[a-zA-Z0-9]{3,}$/.test(fPassword.value)){
		fPassword.classList.remove('is-invalid')
		fPassword.classList.add('is-valid')
	} else {
		fPassword.classList.remove('is-valid')
		fPassword.classList.add('is-invalid')
		error++
	}
	
	if(fPhone.value.match(/^\d{9}$/)){
		fPhone.classList.remove('is-invalid')
		fPhone.classList.add('is-valid')
	} else {
		fPhone.classList.remove('is-valid')
		fPhone.classList.add('is-invalid')
		error++
	}

	if(!error){
		alert("OK");
	}
}

const form = document.querySelector('.form')

form.addEventListener('submit', e => {
	e.preventDefault()
	validate()
})
