// make modular functions
window.validate = validate

// Exercise 6
function validate() {

	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	var allInputs = [fName, fEmail, fAddress, fLastN, fPassword, fPhone]

	// Helper function for setting attibutes 
	function setAttributes(arr){
		arr.forEach(el => {
			el.setAttribute("required", "")
		})
	}
	
	setAttributes(allInputs)

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");
	
	// Regular expressions for conditioning the input fields
	const onlyLetters = /^[A-Za-z]*$/
	const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	const validPassword = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/

	// Validate fields entered by the user: name, phone, password, and email
	// Name Input
	if(fName.value.length < 3 || !(onlyLetters.test(fName.value))){
		error++;
		fName.classList.add('is-invalid')
		errorName.style.display = 'block'
	} else{
		fName.classList.remove('is-invalid')
		errorName.style.display = 'none'
	}

	// Email Input
	if(fEmail.value.length < 3 || !(validEmail.test(fEmail.value))){
		error++;
		fEmail.classList.add('is-invalid')
		errorEmail.style.display = 'block'
	} else{
		fEmail.classList.remove('is-invalid')
		errorEmail.style.display = 'none'
	}

	// Address Input
	if(fAddress.value.length < 3){
		error++;
		fAddress.classList.add('is-invalid')
		errorAddress.style.display = 'block'
	} else{
		fAddress.classList.remove('is-invalid')
		errorAddress.style.display = 'none'
	}

	// Last name Input
	if(fLastN.value.length < 3 || !(onlyLetters.test(fLastN.value))){
		error++;
		fLastN.classList.add('is-invalid')
		errorLastN.style.display = 'block'
	} else{
		fLastN.classList.remove('is-invalid')
		errorLastN.style.display = 'none'
	}

	// Password Input
	if(fPassword.value.length < 3 || !(validPassword.test(fPassword.value))){
		error++;
		fPassword.classList.add('is-invalid')
		errorPassword.style.display = 'block'
	} else{
		fPassword.classList.remove('is-invalid')
		errorPassword.style.display = 'none'
	}

	// Phone Input
	if(fPhone.value.length < 9){
		error++;
		fPhone.classList.add('is-invalid')
		errorPhone.style.display = 'block'
	} else{
		fPhone.classList.remove('is-invalid')
		errorPhone.style.display = 'none'
	}
	 
	if(error>0){
		alert("Error");

	}else{
		setTimeout(()=> {
			alert("OK");
		}, 1000)
	}
}
