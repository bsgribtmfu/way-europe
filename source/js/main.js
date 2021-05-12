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
        }
    })
    element.addEventListener('keyup', function(e) {
        element.value = element.value.replace(/[а-яА-Яa-zA-Z]/g, '');

        if (element.value.length < 3) {
            element.value = '+7 ';
        }
    });
})

forms.forEach(element => {
    element.addEventListener('submit', function(e) {
        e.preventDefault();
        if (phoneValue === 10) {
            console.log('Данные не верны!');
        }
        else {
            element.reset();
            modalNotification.style.display = "block";
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

const events = (element) => {
    element.addEventListener("click", function(e) {
        e.preventDefault();
        let country = element.dataset.country;

        navItems.forEach(item => {
            if (item.classList.contains('tours__navigation-link--active')) {
                item.classList.remove('tours__navigation-link--active')
            }

            if (item.dataset.country === country) {
                item.classList.add('tours__navigation-link--active');
            }
        });

        countries.forEach(item => {
            if (item.classList.contains('countries__item--active')) {
                item.classList.remove('countries__item--active');
            }

            if (item.dataset.country === country) {
                item.classList.add('countries__item--active');
            }
        });
    });
}

placesLinks.forEach(element => {
    events(element);
});

navItems.forEach(element => {
    events(element);
});
