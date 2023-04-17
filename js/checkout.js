
// Exercise 6
function validate() {
		// 	- Tots els camps són obligatoris.
		// - Tots els camps han de tenir almenys 3 caràcters.
		// - El nom i cognoms han de contenir només lletres.
		// - El telèfon ha de contenir només números.
		// - La contrasenya ha d'incloure números i lletres.
		// - L'email ha de tenir format d'email.

		// Quan l'usuari/ària introdueixi un camp que no compleixi les validacions anteriors, l'input s'ha de ressaltar en vermell i mostrar un missatge a la part inferior.

		// Ajuda: podràs acolorir la vora de l'input en vermell i mostrar el missatge d'error manipulant el dom, encara que també pots usar la classe is-invalid de bootstrap.

	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	// const fAddress = document.getElementById('fAddress');
	const fLastName = document.getElementById('fLastN');
	// const fPassword = document.getElementById('fPassword');
	// const fPhone = document.getElementById('fPhone');


	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	// const errorAddress = document.getElementById('errorAddress');
	const errorLastName = document.getElementById('errorLastN');
	// const errorPassword = document.getElementById('errorPassword');
	// const errorPhone = document.getElementById('errorPhone');



	let namePattern = /^[A-Z][a-z]{2,}$/;
	let checkName = namePattern.test(fName);
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" && checkName == false){
		errorName.style.display = 'initial';
		fName.classList.add("needs-validation");
		console.log(checkName);

		error++;
	} else {
		console.log(checkName);
		
		errorName.style.display = 'none';
	}

	if(fEmail.value == ""){
		emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
		fEmail = emailPattern.test(fEmail);
		errorEmail.style.display = 'initial';
		error++;
	}

	if (fAddress.value = "") {
		errorAddress.style.display = 'initial';
		error++;
	}
	if (fLastName.value = "") {
		let namePattern = /^[A-Z][a-z]{2,}$/;
		fLastName = namePattern.test(fLastName);
		console.log(fName);
		errorLastName.style.display = 'initial';
		error++;
	}
	if (fPassword.value = "") {
		errorPassword.style.display = 'initial';
		error++;
	}
	if (fPhone.value = "") {
		errorPhone.style.display = 'initial';
		error++;
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}
	//  // /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
}
