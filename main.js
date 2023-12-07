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
	// Changed to ternary, because I like them more and they are easier for me to read.
	!emailRegex.test(inputEmailValue)
		? (errorDisplay.textContent = "Please enter your email address!")
		: (errorDisplay.textContent = "")
})
