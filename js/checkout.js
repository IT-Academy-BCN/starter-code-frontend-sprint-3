
// Exercise 6
function validate() {
	//Fetch forms
	var forms = document.querySelectorAll('.needs-validation');
	
	// Validate fields entered by the user: name, phone, password, and email
	Array.prototype.slice.call(forms).forEach((form) => {
		form.addEventListener('submit', (event) => {
		  if (!form.checkValidity()) {
			event.preventDefault();
			event.stopPropagation();
		  }
		  
		  form.classList.add('was-validated');
		}, false);
	  });
}

/*

	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	
	//CHECK

	var isANumber = isNaN(fPhone.value) === false;
	
	function onlyLetters(str) {
		return /^[a-zA-Z]+$/.test(str);
	}
	
	let isMail = fEmail.value.includes("@");

	if(fName.value == "" || fName.value.length < 3 || !onlyLetters(fName.value)){
		error++;

	}

	if(fLastN.value == "" || fLastN.value.length < 3){
		 error++;
	}
	
	if(fEmail.value == "" || fPassword.value.length < 3 || !isMail){
		 error++;
	}
	
	if(fAddress.value == "" || fAddress.value.length < 3){
		 error++;
	}

	if(fPassword.value == "" || fPassword.value.length < 3){
		 error++;
	}

	if(fPhone.value == "" || fPhone.value.length < 9 || !isANumber){
		 error++;
	}

	if(error>0){
		//alert("Error");
	}else{
		//alert("OK");
	}
*/