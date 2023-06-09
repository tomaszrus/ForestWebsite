const userName = document.querySelector('#name')
const email = document.querySelector('#email')
const message = document.querySelector('#msg')
const sendBtn = document.querySelector('#send')

// ERRORS Contact

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.contact__form-error-text')
	formBox.classList.add('error')
	errorMsg.textContent = msg
	errorMsg.style.visibility = 'visible'
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
			console.log('ok')
		}
	})
}
const clearError = input => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.contact__form-error-text')
	formBox.classList.remove('error')
	errorMsg.style.visibility = 'hidden'
}

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `${input.previousElementSibling.innerText.replace(':', '')} musi składać się z min. ${min} znaków`)
	}
}
const checkEmail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'E-mail jest niepoprawny')
	}
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.contact__form-box')
	let errorCount = 0
	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++
		}
	})
	if (errorCount === 0) {
		document.getElementById('send').onclick = () => {
			location.href = 'contact.html'
		}
	}
}

sendBtn.addEventListener('click', e => {
	console.log('OK')
	e.preventDefault()
	checkForm([userName, email, message])
	checkLength(userName, 5)
	checkLength(message, 30)
	checkEmail(email)
	checkErrors()
})
