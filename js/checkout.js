
// Exercise 7
function validate(event) {
	let error = 0;
	// Obtener los campos de entrada
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Obtener los elementos de error
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");  
	let errorAddress = document.getElementById("errorAddress");
	let errorLastN = document.getElementById("errorLastN");
	let errorPassword = document.getElementById("errorPassword");
	let errorPhone = document.getElementById("errorPhone");
	
	// Validar campos ingresados ​​por el usuario: nombre, teléfono, contraseña y correo electrónico

	// validar nombre	
	let letras = (/^[a-zA-Z]+$/i);

	if( !letras.test(fName.value) || fName.value.length < 3){
		fName.style.borderColor = "red";
		fName.classList.add("is-invalid");
		fName.classList.remove("is-valid");
		errorName.style.display = "block";
		error++;
		if(fName.value.length >= 3){
			errorName.innerHTML = "No puede incluir números";
		}
	}else if(letras.test(fName.value)){
		fName.style.borderColor = "green";
		fName.classList.add("is-valid");
		fName.classList.remove("is-invalid");
		errorName.style.display = "none";
	}

	// validar apellido
	if(!letras.test(fLastN.value) || fLastN.value.length < 3){
		fLastN.style.borderColor = "red";
		fLastN.classList.add("is-invalid");
		fLastN.classList.remove("is-valid");
		errorLastN.style.display = "block";
		error++;
		if(fLastN.value.length >= 3){
			errorLastN.innerHTML = "No puede incluir números";
		}
	}else if(letras.test(fLastN.value)){
		fLastN.style.borderColor = "green";
		fLastN.classList.add("is-valid");
		fLastN.classList.remove("is-invalid");
		errorLastN.style.display = "none";
	}
	
	// validar Email
	let email = (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
	if (!email.test(fEmail.value)){
		fEmail.style.borderColor = "red";
		errorEmail.style.display = "block";
		fEmail.classList.add("is-invalid");
		fEmail.classList.remove("is-valid");
		error++;
	}else if(email.test(fEmail.value)){
		fEmail.style.borderColor = "green";
		errorEmail.style.display = "none";
		fEmail.classList.add("is-valid");
		fEmail.classList.remove("is-invalid");
	}
	
	// validar Password
	let password = (/^(?=.*[a-zA-Z])(?=.*[0-9]).{4,8}$/);
	if(!password.test(fPassword.value)){
		fPassword.style.borderColor = "red";
		fPassword.classList.add("is-invalid");
		fPassword.classList.remove("is-valid");
		errorPassword.style.display = "block";
		error++;
		if(fPassword.value.length >= 4){
			errorPassword.innerHTML = "Tiene que tener minimo un letra y una letra";
		}
	} else if(password.test(fPassword.value)) {
		fPassword.style.borderColor = "green";
		fPassword.classList.add("is-valid");
		fPassword.classList.remove("is-invalid");
		errorPassword.style.display = "none";
	}
	
	// validar telefono
	let phone =  (/^\d{9}$/);
	if(!phone.test(fPhone.value)){
		fPhone.style.borderColor = "red";
		fPhone.classList.add("is-invalid");
		fPhone.classList.remove("is-valid");
		errorPhone.style.display = "block";
		error++;
		if(fPhone.value.length > 0){
			errorPhone.innerHTML = "¡¡Numero de telefono invalido!! Debe tener 9 dígitos sin letras";
		}
	}else if(phone.test(fPhone.value)){
		fPhone.style.borderColor = "green";
		fPhone.classList.add("is-valid");
		fPhone.classList.remove("is-invalid");
		errorPhone.style.display = "none";
	}
	
	// validar direccion
	if(fAddress.value.length < 3){
		fAddress.style.borderColor = "red";
		fAddress.classList.add("is-invalid");
		fAddress.classList.remove("is-valid");
		errorAddress.style.display = "block";
		error++
	}else{
		fAddress.style.borderColor = "green";
		fAddress.classList.add("is-valid");
		fAddress.classList.remove("is-invalid");
		errorAddress.style.display = "none";
	}

	(error > 0) ? event.preventDefault(): alert("Registrado correctamente.");
}

// validar con Boostrap
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
	'use strict'
  
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')
  
	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
	  .forEach(function (form) {
		form.addEventListener('submit', function (event) {
		  if (!form.checkValidity()) {
			event.preventDefault()
			event.stopPropagation()
		  }
  
		  form.classList.add('was-validated')
		}, false)
	})
})()