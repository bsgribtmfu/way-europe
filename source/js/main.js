const phonesValue = document.querySelectorAll('.form__input-phone');
const phoneValue = document.querySelector('.form__input-phone');
const forms = document.querySelectorAll('.form');
const modalClose = document.querySelector('.modal__close');
const modalNotificationClose = document.querySelector('.modal-notification__close');
const modal = document.querySelector('.modal');
const buttonCountries = document.querySelector('.countries__button');
const buttonCard = document.querySelector('.card__button');
const buttonsCards = document.querySelectorAll('.card__button');
const headerLogo = document.querySelector('.header__logo');
const headerToggle = document.querySelector('.header__toggle');
const headerNavigation = document.querySelector('.header__navigation');
const modalNotification = document.querySelector('.modal-notification');
const placesLinks = document.querySelectorAll('.places__link');
const tours = document.querySelector('.tours__item');
const navItems = document.querySelectorAll('.tours__navigation-link');
const countries = document.querySelectorAll('.countries__item');
const messageAlert = document.querySelector('.form__alert');

buttonsCards.forEach(element => {
    element.addEventListener('click', function() {
        modal.style.display = "block";
    })
});

phonesValue.forEach(element => {
    element.addEventListener('focus', function() {
        if (element.value === '+7 ' || element.value === '') {
            element.value = '+7 ';
        }
    })
    element.addEventListener('blur', function() {
        if (element.value === '+7 ') {
            element.value = '';
            element.placeholder = element.getAttribute('placeholder');
            phoneValue.style.borderColor = 'rgba(44,46,63,0.3)';
            messageAlert.style.display = 'none';
        }
    })
    element.addEventListener('keyup', function() {
        element.value = element.value.replace(/[а-яА-Яa-zA-Z]/g, '');

        if (element.value.length < 3) {
            element.value = '+7 ';
        }
    });
})

forms.forEach(element => {
    element.addEventListener('submit', function(e) {
        e.preventDefault();
        if (phoneValue.value.length === 13) {
            element.reset();
            modalNotification.style.display = "block";
        }
        else {
            phoneValue.style.borderColor = "#FE7865";
            messageAlert.style.display = 'block';
        }
    })
})

modalClose.addEventListener("click", function() {
    modal.style.display = "none";
})

modalNotificationClose.addEventListener("click", function() {
    modalNotification.style.display = "none";
})

buttonCountries.addEventListener("click", function() {
    modal.style.display = "block";
})

buttonCountries.addEventListener("click", function() {
    modal.style.display = "block";
})

headerToggle.addEventListener("click", function() {
    if (headerToggle.classList.contains('header__toggle--closed')) {
        headerToggle.classList.remove('header__toggle--closed');
        headerToggle.classList.add('header__toggle--opened');
        headerLogo.style.display = "none";
        headerNavigation.style.display = "block";
    }
    else if (headerToggle.classList.contains('header__toggle--opened')) {
        headerToggle.classList.remove('header__toggle--opened');
        headerLogo.classList.add('header__logo--show');
        headerToggle.classList.add('header__toggle--closed');
        headerLogo.style.display = "block";
        headerNavigation.style.display = "none";
    }
})

const clearActive = () => {
    countries.forEach(item => {
        if (item.classList.contains('countries__item--active')) {
            item.classList.remove('countries__item--active');
        }
    });

    navItems.forEach(item => {
        if (item.classList.contains('tours__navigation-link--active')) {
            item.classList.remove('tours__navigation-link--active');
        }
    });
}

const addActive = (currentDataset) => {
    countries.forEach(item => {
        if (currentDataset === item.dataset.country) {
            item.classList.add('countries__item--active');
        }
    })
    navItems.forEach(item => {
        if (currentDataset === item.dataset.country) {
            item.classList.add('tours__navigation-link--active');
        }
    })
}


placesLinks.forEach(element => {
    element.addEventListener("click", function() {
        clearActive();
        addActive(element.dataset.country);
    })
})

navItems.forEach(element => {
    element.addEventListener("click", function(e) {
        e.preventDefault();
        clearActive();
        addActive(element.dataset.country);
    })
})
