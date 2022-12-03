const hamburger = () => {
  const navActive = document.querySelector('.nav-active'),
    hamburger = document.querySelector('.hamburger'),
    headerPhoneWrap = document.querySelector('.header__phone-wrap');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navActive.classList.toggle('vigorous');
    // headerPhoneWrap.classList.toggle('vigorous');
  });
};

export default hamburger;
