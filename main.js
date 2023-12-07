import "./src/index.scss"

// Email Validation

const emailAddressInput = document.querySelector("#email-address")
const getStartedButton = document.querySelector("#get-started-btn")
const errorDisplay = document.querySelector("#error")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

getStartedButton.addEventListener("click", (e) => {
	e.preventDefault()
	let inputEmailValue = emailAddressInput.value
	console.log(inputEmailValue)
	document.querySelector("#email-address").value = ""
	emailAddressInput.style.border = "2px solid yellow"

	// Check email

	if (!emailRegex.test(inputEmailValue)) {
		errorDisplay.textContent = "Please enter your email address!"
	} else {
		// clear the error message if its fine
		errorDisplay.textContent = ""
	}
})

// Add the form validation aspect here. Too lazy to bother now. But, yep.
