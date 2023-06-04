const burgerBtn = document.querySelector('.burger')
const barsIco = document.querySelector('.fa-bars')
const xIco = document.querySelector('.fa-times')
const navMobile = document.querySelector('.nav__mobile')
const footerYear = document.querySelector('.footer__year')
const menuItems = document.querySelectorAll('.nav-link')
const scrollSpySections = document.querySelectorAll('.scrollspy-section')

const contactPage = document.querySelector('.nav-contact')
const offerPage = document.querySelector('.nav-offer')

const handleNav = () => {
	navMobile.classList.toggle('show')
	// burgerBtn.classList.toggle('show')
	barsIco.classList.toggle('hide')
	xIco.classList.toggle('hide')
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const handleScrollSpy = () => {
	const sections = []

	scrollSpySections.forEach(section => {
		if (window.scrollY <= section.offsetTop + section.offsetHeight - 103) {
			sections.push(section)

			const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)

			menuItems.forEach(item => item.classList.remove('active'))

			activeSection.classList.add('active')
		}
	})
}

const changeActive = () => {
	if (document.body.classList.contains('main-page')) {
		window.addEventListener('scroll', handleScrollSpy)
	} else if (document.body.classList.contains('offers-page')) {
		menuItems.forEach(item => item.classList.remove('active'))

		offerPage.classList.add('active')
	} else if (document.body.classList.contains('contact-page')) {
		menuItems.forEach(item => item.classList.remove('active'))
		contactPage.classList.add('active')
	}
}

changeActive()
handleCurrentYear()
burgerBtn.addEventListener('click', handleNav)
