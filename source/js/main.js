const phonesValue = document.querySelectorAll('.form__input-phone');
const modalClose = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const buttonCountries = document.querySelector('.countries__button');
const buttonCard = document.querySelector('.card__button');
const buttonsCards = document.querySelectorAll('.card__button');
const headerLogo = document.querySelector('.header__logo');
const headerToggle = document.querySelector('.header__toggle');
const headerNavigation = document.querySelector('.header__navigation');

// const changeForm = (value) => {
//     modal.style.display = value;
// }

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
    element.addEventListener('keyup', function() {
        element.value = element.value.replace(/[а-яА-Яa-zA-Z]/g, '');
    });
})

modalClose.addEventListener("click", function() {
    modal.style.display = "none";
})

buttonCountries.addEventListener("click", function() {
    modal.style.display = "block";
})

buttonCountries.addEventListener("click", function() {
    modal.style.display = "block";
})

const checkToggle = () => {
    if (headerToggle.style.display === '') {}
}

headerToggle.addEventListener("click", function() {
    headerLogo.classList.add('header__logo--hidden');
    headerNavigation.style.display = "block";
})