import "./src/index.scss"

// Email Validation

const emailAddressInput = document.querySelector("#email-address")
const getStartedButton = document.querySelector("#get-started-btn")
const errorDisplay = document.querySelector("#error")

getStartedButton.addEventListener("click", (e) => {
	e.preventDefault()
	let inputEmailValue = emailAddressInput.value
	console.log(inputEmailValue)
	document.querySelector("#email-address").value = ""
	emailAddressInput.style.border = "2px solid yellow"

	// Check email

	if (inputEmailValue === "" || inputEmailValue === null) {
		errorDisplay.textContent = "Please enter your email address!"
	}
})

// Add the form validation aspect here. Too lazy to bother now. But, yep.
