
// Exercise 6
function validate() {

	

	let fName = document.getElementById("fName").value;
	let fEmail = document.getElementById("fEmail").value;
	let fAddress = document.getElementById("fAddress").value;
	let fLastN = document.getElementById("fLastN").value;
	let fPassword = document.getElementById("fPassword").value;
	let fPhone = document.getElementById("fPhone").value;


	let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
	let phoneRegex = /^\d{7}$/;

	// Get the error elements
	let  errorName = document.getElementById("errorName");
	let  errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if (!/^[a-zA-Z]{3,}$/.test(fName)){
		document.getElementById("fName").classList.add("is-invalid")
		
	} else {
		document.getElementById("fName").classList.remove("is-invalid");
	}
	if (!/^[a-zA-Z]{3,}$/.test(fLastN)){
		document.getElementById("fLastN").classList.add("is-invalid")	
	}
	else {
		document.getElementById("fLastN").classList.remove("is-invalid");
	}
	if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(fEmail)) {
		document.getElementById("fEmail").classList.add("is-invalid")
	} else {
		document.getElementById("fEmail").classList.remove("is-invalid");
	}
	if (phoneRegex.test(fPhone)) {
		document.getElementById("fPhone").classList.remove("is-invalid");
	}else {
		document.getElementById("fPhone").classList.add("is-invalid");
	}
	if (!/^[a-zA-Z]{3,}$/.test(fAddress)) {
		document.getElementById("fAddress").classList.add("is-invalid");
	}else {
		document.getElementById("fAddress").classList.remove("is-invalid");
	}
	if (regex.test(fPassword)) {
		document.getElementById("fPassword").classList.remove("is-invalid");
	}else {
		document.getElementById("fPassword").classList.add("is-invalid");
	}
}
