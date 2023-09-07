const getCurrentYear = () => {
  const yearElement = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearElement.innerHTML = currentYear;
};

getCurrentYear();
