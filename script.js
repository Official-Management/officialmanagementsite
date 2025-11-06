document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thanks for your message! I’ll get back to you soon.");
});
// Auto-fill phone number field when user selects a country
const countrySelect = document.getElementById("country");
const phoneInput = document.getElementById("phone");

countrySelect.addEventListener("change", () => {
  const code = countrySelect.value;

  if (code && code !== "other") {
    // If user chooses a country, set phone number to start with that code
    phoneInput.value = code + " ";
  } else {
    // If "Other" or blank, clear it
    phoneInput.value = "";
  }
});

// Handle form submission
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thanks, your message has been sent!");
});


// Select form elements
const countrySelect = document.getElementById("country");
const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");
const form = document.querySelector("form");

// Auto-fill phone number when user picks a country
countrySelect.addEventListener("change", () => {
  const code = countrySelect.value;
  if (code && code !== "other") {
    phoneInput.value = code + " ";
  } else {
    phoneInput.value = "";
  }
});

// Real-time phone number validation
phoneInput.addEventListener("input", () => {
  const phoneValue = phoneInput.value.trim();
  const validPattern = /^\+?[0-9\s\-]{7,15}$/;

  if (!validPattern.test(phoneValue)) {
    phoneError.style.display = "block"; // Show warning
  } else {
    phoneError.style.display = "none"; // Hide warning
  }
});

// On form submit
form.addEventListener("submit", (event) => {
  const phoneValue = phoneInput.value.trim();
  const validPattern = /^\+?[0-9\s\-]{7,15}$/;

  if (!validPattern.test(phoneValue)) {
    event.preventDefault(); // Stop submission
    phoneError.style.display = "block";
    alert("Please enter a valid phone number before submitting.");
  } else {
    event.preventDefault(); // (For demo)
    phoneError.style.display = "none";
    alert("✅ Thanks, your message has been sent!");
  }
});