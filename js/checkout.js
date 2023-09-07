const validate = () => {
  const form = document.querySelector(".form");
  form.addEventListener("submit", (event) => event.preventDefault());

  const fields = [
    {
      input: "fName",
      error: "errorName",
      regex: /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g,
    },
    {
      input: "fEmail",
      error: "errorEmail",
      regex: /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/,
    },
    { input: "fAddress", error: "errorAddress", regex: /^.{3,}$/ },
    {
      input: "fLastN",
      error: "errorLastN",
      regex: /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g,
    },
    {
      input: "fPassword",
      error: "errorPassword",
      regex: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/,
    },
    { input: "fPhone", error: "errorPhone", regex: /^[0-9 ]+$/ },
  ];

  let error = 0;

  fields.forEach((field) => {
    const inputElement = document.getElementById(field.input);
    const errorElement = document.getElementById(field.error);

    if (
      inputElement.value === "" ||
      inputElement.value.length < 3 ||
      !field.regex.test(inputElement.value)
    ) {
      inputElement.classList.add("is-invalid");
      errorElement.style.display = "block";
      error++;
    } else {
      inputElement.classList.remove("is-invalid");
      inputElement.classList.add("is-valid");
      errorElement.style.display = "none";
    }
  });

  if (error > 0) {
    alert("Error");
  } else {
    alert("OK");
  }
};
