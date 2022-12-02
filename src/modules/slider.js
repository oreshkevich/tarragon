import Swiper, { Autoplay, Navigation, Pagination, Keyboard } from 'swiper';
Swiper.use([Autoplay]);
Swiper.use([Navigation]);
Swiper.use([Pagination]);
Swiper.use([Keyboard]);
const slider = () => {
  const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    initialSlide: 0,
    watchActiveIndex: true,
    centeredSlides: true,
    createPagination: true,
    slidesPerView: 1,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 800,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
  });
  swiper.on('slideChange afterInit init', function () {
    let currentSlide = this.activeIndex + 1;
    document.querySelector('.counter').innerHTML = `
    <span class="counter__current">
    ${currentSlide}
    </span>
    /
    <span class="counter__total">
      ${this.slides.length}
    </span>`;
  });

  swiper.init();
  const menu = document.querySelector('.swiper-menu');
  const dots = document.querySelectorAll('.dot');
  menu.addEventListener('click', function (e) {
    const index = e.target.dataset.index;
    dots.forEach((item) => item.classList.remove('dot-active'));

    dots[index].classList.add('dot-active');
    swiper.slideTo(index);
  });
};

export default slider;

