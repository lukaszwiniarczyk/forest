const msg = document.querySelector('.msg');
const msgBtn = document.querySelector('.msg__btn');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msgInput = document.querySelector('#msg');
const checkBox = document.querySelector('#checkbox');
const errorName = document.querySelector('.contact__error--name');
const errorEmail = document.querySelector('.contact__error--email');
const errorMsg = document.querySelector('.contact__error--msg');
const errorCheckBox = document.querySelector('.contact__error--checkbox');
const sendBtn = document.querySelector('.contact__button');

const nav = document.querySelector('.nav');
const navMobile = document.querySelector('.nav-mobile__links');
const allNavItems = document.querySelectorAll('.nav-mobile__links__link');
const navBtn = document.querySelector('.hamburger');
const body = document.querySelector('body');
const html = document.querySelector('html');

const navContactLink = document.querySelector('.nav__link-contact a');

const sections = document.querySelectorAll('section[id]');

const re =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// NAV
const stickyNav = () => {
	if (scrollY > 360) {
		nav.style.borderBottom = '1px solid #cfcece';
	} else {
		nav.style.borderBottom = 'none';
	}
};
setInterval(stickyNav, 100);
//NAV REMOVE NAV

allNavItems.forEach((item) =>
	item.addEventListener('click', () => {
		navMobile.classList.remove('nav-mobile__links--active');
		navBtn.classList.remove('is-active');
		body.style.overflow = 'visible';
		html.style.overflow = 'visible';
	})
);

//NAV HAMBURGER

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile__links--active');

	if (navMobile.classList.contains('nav-mobile__links--active')) {
		body.style.overflow = 'hidden';
		html.style.overflow = 'hidden';
	} else {
		body.style.overflow = 'visible';
		html.style.overflow = 'visible';
	}
};

navBtn.addEventListener('click', handleNav);

//NAV ACTIVE LINK

window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
	let scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 75;
		const sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.nav__links a[href*=' + sectionId + ']')
				.classList.add('active');
		} else {
			document
				.querySelector('.nav__links a[href*=' + sectionId + ']')
				.classList.remove('active');
		}
	});
}

const addActiveContact = () => {
	if (window.location.href === 'http://localhost:3000/kontakt.html') {
		navContactLink.classList.add('active');
	}
};
addActiveContact();

const navOffertLink = document.querySelector('.nav__link-offert a');
const addActiveOffers = () => {
	if (window.location.href === 'http://localhost:3000/oferty.html') {
		navOffertLink.classList.add('active');
	}
};
addActiveOffers();

// FOOTER CURRENT YEAR
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerHTML = currentYear;

// FORM CONTACT
const checkName = () => {
	if (nameInput.value.length >= 3) {
		errorName.style.visibility = 'hidden';
	} else {
		errorName.style.visibility = 'visible';
	}
};
const checkMsg = () => {
	if (msgInput.value.length !== 0) {
		errorMsg.style.visibility = 'hidden';
	} else {
		errorMsg.style.visibility = 'visible';
	}
};

const checkEmail = () => {
	if (re.test(emailInput.value)) {
		errorEmail.style.visibility = 'hidden';
	} else {
		errorEmail.style.visibility = 'visible';
	}
};

const checkCheckBox = () => {
	if (checkBox.checked) {
		errorCheckBox.style.visibility = 'hidden';
	} else {
		errorCheckBox.style.visibility = 'visible';
	}
};

const checkAllForm = () => {
	if (
		nameInput.value.length >= 3 &&
		re.test(emailInput.value) === true &&
		msgInput.value.length !== 0 &&
		checkBox.checked
	) {
		msg.style.display = 'flex';
		nameInput.value = '';
		emailInput.value = '';
		msgInput.value = '';
		checkBox.checked = false;
	}
};
const formEngine = () => {
	checkName();
	checkEmail();
	checkMsg();
	checkCheckBox();
	checkAllForm();
};

sendBtn.addEventListener('click', formEngine);

const closeMsg = () => {
	msg.style.display = 'none';
};
msgBtn.addEventListener('click', closeMsg);
