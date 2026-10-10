
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("pw");
const loginError = document.getElementById("loginError");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  loginError.textContent = "";

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (email === "" || password === "") {
    loginError.textContent = "Please fill in all fields";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    loginError.textContent = "Please enter a valid email";
    return;
  }

  alert("Form validation successful. Backend integration is pending.");
});
