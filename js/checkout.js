
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
  
	  // Get the error elements
	  var errorName = document.getElementById("errorName");
	  var errorEmail = document.getElementById("errorEmail");  
	  
	  
		// Verificacion Name
		if(fName.value == "" || fName.length<3){
			error++;
			document.getElementById("fName").style.borderColor = "#ff0000";
			errorName.style.display = "block";
		}else if (onlyLetters.test(fName)){
			error++;
			document.getElementById("fName").style.borderColor = "#ff0000";
			errorName.style.display = "block";
			document.getElementById("errorName").innerHTML = "This field cannot contain numbers"
		}
		
		// Verificacion Last Name
		if(fLastN.value == "" || fLastN.length<3){
			error++;
			document.getElementById("fLastN").style.borderColor = "#ff0000";
			errorLastN.style.display = "block";
		}else if (onlyLetters.test(fLastN)){
			error++;
			document.getElementById("fLastN").style.borderColor = "#ff0000";
			errorLastN.style.display = "block";
			document.getElementById("errorLastN").innerHTML = "This field cannot contain numbers"
		}
	
		
		// Verificacion Email
		if(fEmail.value == "" || fEmail.length<3){
			error++;
			document.getElementById("fEmail").style.borderColor = "#ff0000";
			errorEmail.style.display = "block";
		}else if (emailOk.test(fEmail)){
			error++;
			document.getElementById("fEmail").style.borderColor = "#ff0000";
			errorEmail.style.display = "block";
			document.getElementById("errorEmail").innerHTML = "This field must contain @ and domain format (Ej. user@gmail.com)"
		}
	
		// Verificacion Password
		if(fPassword.value == "" || fPassword.length<3){
			error++;
			document.getElementById("fPassword").style.borderColor = "#ff0000";
			errorPassword.style.display = "block";
		}else if (passwordOk.test(fPassword)){
			error++;
			document.getElementById("fPassword").style.borderColor = "#ff0000";
			errorPassword.style.display = "block";
			document.getElementById("errorPassword").innerHTML = "This field must contain letters and numbers"
		}
	
		// Verificacion Address
		if(fAddress.value == "" || fAddress.length<3){
			error++;
			document.getElementById("fAddress").style.borderColor = "#ff0000";
			errorAddress.style.display = "block";
		}
	
		// Verificacion Phone
		if(fPhone.value == "" || fPhone.length<3){
			error++;
			document.getElementById("fPhone").style.borderColor = "#ff0000";
			errorPhone.style.display = "block";
		}else if (onlyNumbers.test(fPhone)){
			error++;
			document.getElementById("fPhone").style.borderColor = "#ff0000";
			errorPhone.style.display = "block";
			document.getElementById("errorPhone").innerHTML = "This field must only contain numbers"
		}
	
		if(error>0){
			
			alert("Error. Form is not sent. Please check inputs");
		}else{
			
			alert("OK. Form has been validated");
		}
	
	}

	  // Validate fields entered by the user: name, phone, password, and email
  
  
	//if( fName == null || fName.length == 0 || /^\s+$/.test(fName) ) { return false;}
	//if( fEmail == null || fEmail.length == 0 || /^\s+$/.test(fEmail) ) { return false;}
	//if( fAddress == null || fAddress.length == 0 || /^\s+$/.test(fAddress) ) { return false;}
	//if( fLastN == null || fLastN.length == 0 || /^\s+$/.test(fLastN) ) { return false;}
	//if( fPassword == null || fPassword.length == 0 || /^\s+$/.test(fPassword) ) { return false;}
	//if( fPhone == null || fPhone.length == 0 || /^\s+$/.test(fPhone) ) { return false;}

	


