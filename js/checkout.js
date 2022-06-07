
// Exercise 6
function validate() {
	var isValid = true;

	// create an array of objects with every input field, error element and validation function
	var formElements = [
		{
			inputField: document.getElementById("fName"),
			error: document.getElementById("errorName"),
			validationFunction: isValidName,
		},
		{
			inputField: document.getElementById("fLastN"),
			error: document.getElementById("errorLastN"),
			validationFunction: isValidName,
		},
		{
			inputField: document.getElementById("fEmail"),
			error: document.getElementById("errorEmail"),
			validationFunction: isValidEmail,
		},
		{
			inputField: document.getElementById("fPassword"),
			error: document.getElementById("errorPassword"),
			validationFunction: isValidPassword,
		},
		{
			inputField: document.getElementById("fAddress"),
			error: document.getElementById("errorAddress"),
			validationFunction: isValidAddress,
		},
		{
			inputField: document.getElementById("fPhone"),
			error: document.getElementById("errorPhone"),
			validationFunction: isValidPhone,
		},
	];


	// Validate every field entered by the user: name, phone, password, and email
	for(let i=0; i < formElements.length; i++){
		if(!formElements[i].validationFunction(formElements[i].inputField.value)){
			isValid = false;
			formElements[i].error.style.display = "inline-block";
		} else {
			formElements[i].error.style.display = "none";
		}
	}
	return isValid;

}

/* Validation functions */

// The name must be of at least 3 letters
function isValidName(str) {
	return /^[a-zA-Z]{3,}$/.test(str);
}

// The passwork must have at least 3 letters or numbers
function isValidPassword(str) {  
	return /^[A-Za-z0-9]{3,}$/.test(str);
}
// The email address must have the following format: {letters, numbers, hyphens or dots}@{letters, numbers, hyphens or dots}.{at least 2 letters}
function isValidEmail(str){
	return /^[A-Za-z0-9_\.-]+@[A-Za-z0-9_\.-]+\.[A-Za-z]{2,}$/.test(str);
}

// The phone must be 9 digits with no letters
function isValidPhone(str){
	return /^[0-9]{9,}$/.test(str);
}

// The address must have at least 3 characters
function isValidAddress(str){
	return str.length >= 3;
}