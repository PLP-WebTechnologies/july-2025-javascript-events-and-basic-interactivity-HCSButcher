
const messageBtn = document.getElementById("messageBtn");
const messageArea = document.getElementById("messageArea");

messageBtn.addEventListener("click", () => {
  messageArea.textContent = "Hello , you just clicked the button!";
});


// Light/Dark Mode Toggle
const toggleModeBtn = document.getElementById("toggleModeBtn");
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  count--;
  counter.textContent = count;
});



 Form Validation
const signupForm = document.getElementById("signupForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  // Validate Name
  if (nameField.value.trim().length < 2) {
    nameError.textContent = "Name must be at least 2 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email with regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailField.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password (min 6 chars, at least 1 number)
  const passwordPattern = /^(?=.*\d).{6,}$/;
  if (!passwordField.value.match(passwordPattern)) {
    passwordError.textContent = "Password must be 6+ chars with at least 1 number.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Show success if valid
  if (valid) {
    formSuccess.textContent = " Form submitted successfully!";
    signupForm.reset();
  }
});
