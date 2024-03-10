const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percentValue = document.querySelectorAll(".skills__elem-percent"),
    fillValue = document.querySelectorAll(".skills__elem-bar_filled");

percentValue.forEach((elem, i) => {
    const updateWidth = value => fillValue[i].style.width = value;
    updateWidth(elem.value);
    elem.addEventListener('change', e => updateWidth(e.target.value));
});
