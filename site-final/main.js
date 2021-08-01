// quase nenhum js, porque o intuito do curso é ensinar: html & css <3

// module pattern, para não tornar as variáveis globais ( encapsular )
(function () {
  const toggler = document.querySelector('.main-container__header__list__toggler');
  const nav = document.querySelector('.main-container__header__navigation');
  const allLinks = nav.children;

  for (let link of allLinks) {
    if (link.href == location.href) {
      link.style.backgroundColor = '#222121';
    }
  }

  toggler.addEventListener('click', function () {
    nav.classList.toggle('closed');
  });
})();