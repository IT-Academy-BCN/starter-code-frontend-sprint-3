
// Exercise 6
function validate() {
    var error = 0;
    // Get the input fields
    var fName = document.getElementById("fName");
    var lName = document.getElementById("lName");
    var phone = document.getElementById("phone");
    var password = document.getElementById("password");
    var fEmail = document.getElementById("fEmail");

    // Get the error elements
    var errorName = document.getElementById("errorName");
    var errorLastName = document.getElementById("errorLastName");
    var errorPhone = document.getElementById("errorPhone");
    var errorPassword = document.getElementById("errorPassword");
    var errorEmail = document.getElementById("errorEmail");  
    
    // Validate fields entered by the user: name, phone, password, and email
    if(fName.value.length < 3 || !/^[a-zA-Z]+$/.test(fName.value)){
        error++;
        fName.classList.add("is-invalid");
        errorName.innerText = "El nombre debe tener al menos 3 caracteres y contener solo letras";
    } else {
        fName.classList.remove("is-invalid");
        errorName.innerText = "";
    }

    if(lName.value.length < 3 || !/^[a-zA-Z]+$/.test(lName.value)){
        error++;
        lName.classList.add("is-invalid");
        errorLastName.innerText = "Los apellidos deben tener al menos 3 caracteres y contener solo letras";
    } else {
        lName.classList.remove("is-invalid");
        errorLastName.innerText = "";
    }

    if(phone.value.length !== 9 || isNaN(phone.value)){
        error++;
        phone.classList.add("is-invalid");
        errorPhone.innerText = "El teléfono debe tener 9 dígitos y contener solo números";
    } else {
        phone.classList.remove("is-invalid");
        errorPhone.innerText = "";
    }
     
    if(password.value.length < 6 || !/\d/.test(password.value) || !/[a-zA-Z]/.test(password.value)){
        error++;
        password.classList.add("is-invalid");
        errorPassword.innerText = "La contraseña debe tener al menos 6 caracteres, incluir números y letras";
    } else {
        password.classList.remove("is-invalid");
        errorPassword.innerText = "";
    }

    if(fEmail.value.length === 0 || !/\S+@\S+\.\S+/.test(fEmail.value)){
        error++;
        fEmail.classList.add("is-invalid");
        errorEmail.innerText = "El email debe tener un formato válido";
    } else {
        fEmail.classList.remove("is-invalid");
        errorEmail.innerText = "";
    }

    if(error>0){
        alert("Error");
    }else{
        alert("OK");
    }

}
