
	// Exercise 6
	function validate() {

		var error = 0;
		// Get the input fields
		var form = document.getElementsByTagName("form")[0];
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

		// Prevent the page from send info after submit andrefresh
		form.addEventListener("submit", function(event){

			validInputs();

			if(error>0) {
				event.preventDefault();
			} else {
				form.submit();
			}
		
		});
		
		function validInputs() {
		// Validate fields entered by the user: name, phone, password, and email

		var regLastN = /^[a-zA-Z]{3,}$/.test(fLastN.value);

		// Checking that the user only enters letters for input Name and Last name.
		var regName = /^[a-zA-Z]{3,}$/.test(fName.value);

		// Checking that the user only enters numbers for input phone.
		var regPhone = /^[0-9]{9,}$/.test(fPhone.value);

		// Checking that the user enters numbers and letter for the input password
		var regPass = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){3,9}$/.test(fPassword.value)

		// Checking that the user enters an email format
		var regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,3}$/.test(fEmail.value);

		if(fName.value == "" || !regName){
			errorName.style.display = "block";
			fName.style.border = "5px solid red";
			error++;
		} else {
			errorName.style.display = "none";
			fName.style.border = "none";
		}

		if(fEmail.value == "" || !regEmail){
			errorEmail.style.display = "block";
			fEmail.style.border = "5px solid red";
			error++;
		} else {
			errorEmail.style.display = "none";
			fEmail.style.border = "none";
		}

		if(fAddress.value == "" || fAddress.value.length <= 3){
			errorAddress.style.display = "block";
			fAddress.style.border = "5px solid red";
			error++;
		} else {
			errorAddress.style.display = "none";
			fAddress.style.border = "none";
		}

		if(fLastN.value == "" || !regLastN){
			errorLastN.style.display = "block";
			fLastN.style.border = "5px solid red";
			error++;
		} else {
			errorLastN.style.display = "none";
			fLastN.style.border = "none";
		}

		if(fPassword.value == "" || !regPass){
			errorPassword.style.display = "block";
			fPassword.style.border = "5px solid red";
			error++;
		} else {
			errorPassword.style.display = "none";
			fPassword.style.border = "none";
		}

		if(fPhone.value == "" || !regPhone){
			errorPhone.style.display = "block";
			fPhone.style.border = "5px solid red";
			error++;
		} else {
			errorPhone.style.display = "none";
			fPhone.style.border = "none";
		}
	}	
}



