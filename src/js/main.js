const burgerBtn = document.querySelector('.burger')
const barsIco = document.querySelector('.fa-bars')
const xIco = document.querySelector('.fa-times')
const navMobile = document.querySelector('.nav__mobile')

const handleNav = () => {
	navMobile.classList.toggle('show')
	// burgerBtn.classList.toggle('show')
	barsIco.classList.toggle('hide')
	xIco.classList.toggle('hide')
}

burgerBtn.addEventListener('click', handleNav)
