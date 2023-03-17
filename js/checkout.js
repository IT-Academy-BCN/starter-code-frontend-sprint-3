let error;

function isValid(pattern, element) {
	let result = pattern.test(element.value)
	if(result) {
		element.classList.remove('is-invalid')
		element.classList.add('is-valid')
	} else {
		element.classList.remove('is-valid')
		element.classList.add('is-invalid')
		error++
	}
}

// Exercise 6
function validate() {
	error = 0
	// Get the input fields
	const fName = document.getElementById("fName");
	const fEmail = document.getElementById("fEmail");
	const fAddress = document.getElementById("fAddress");
	const fLastName = document.getElementById("fLastN");
	const fPassword = document.getElementById("fPassword");
	const fPhone = document.getElementById("fPhone");
	
	// Validate fields entered by the user: name, phone, password, and email
	isValid(/^[a-zA-Z]{3,}[ ]?[a-zA-Z]*$/, fName)
	isValid(/^[a-zA-Z]{3,}[ ]?[a-zA-Z]*$/, fLastName)
	// Eg. jon@domain.com
	isValid(/^[a-zA-Z0-9]{3,}[@][a-zA-Z]+[.][a-zA-Z]+$/, fEmail)
	isValid(/^[a-zA-Z]{3,}([ ]?[a-zA-Z0-9]*)*$/, fAddress)
	isValid(/^[a-zA-Z0-9]{3,}$/, fPassword)
	isValid(/^\d{9}$/, fPhone)

	if(!error){
		alert("OK");
	}
}

const form = document.querySelector('.form')

form.addEventListener('submit', e => {
	e.preventDefault()
	validate()
})
