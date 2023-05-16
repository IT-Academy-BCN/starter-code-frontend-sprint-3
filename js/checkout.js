
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress")
	var fLastN = document.getElementById("fLastN")
	var fPassword = document.getElementById("fPassword")
	var fPhone = document.getElementById("fPhone")
	
	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress")
	var errorLastN = document.getElementById("errorLastN")
	var errorPassword = document.getElementById("errorPassword")
	var errorPhone = document.getElementById("errorPhone")
	// Validate fields entered by the user: name, phone, password, and email

	//Expresion regular para texto
	const regExText = /^[a-zA-Z]+$/
	//Expresion regular para email
	const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	//Expresion regular para numero de telefono
	const regExPhone = /^[679]\d{8}$/
	const regExPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{4,8}$/

	if(fName.value == "" || !regExText.test(fName.value)){
		errorName.style.display = "block"
		fName.style.borderColor = "red";
	}
	if(fEmail.value == "" || !regExEmail.test(fEmail.value)){
		errorEmail.style.display = "block"
		fEmail.style.borderColor = "red";
	}

	if(fAddress.value == "" ){
		errorAddress.style.display = "block"
		fAddress.style.borderColor = "red";
	}
	if(fLastN.value == ""){
		errorLastN.style.display = "block"
		fLastN.style.borderColor = "red";
	}
	let fPhoneNum = parseInt(fPhone.value)//Paso el valor del input de numero de string a numero
	
	if(!regExPassword.test(fPassword.value)){
		errorPassword.style.display = "block"
		fPassword.style.borderColor = "red";
	}
	if(!regExPhone.test(fPhoneNum)){
		errorPhone.style.display = "block"
		fPhone.style.borderColor = "red";
	}



	

}
