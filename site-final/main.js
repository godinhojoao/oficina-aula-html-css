// quase nenhum js, porque o intuito do curso é ensinar: html & css <3

// module pattern, para não tornar as variáveis globais ( encapsular )
(function () {
  const toggler = document.querySelector('.main-container__header__list__toggler');
  const nav = document.querySelector('.main-container__header__navigation');

  toggler.addEventListener('click', function () {
    nav.classList.toggle('closed');
  });
})();