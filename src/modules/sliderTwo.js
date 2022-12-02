import Swiper, { Autoplay, Navigation, Pagination, Keyboard } from 'swiper';
Swiper.use([Autoplay]);
Swiper.use([Navigation]);
Swiper.use([Pagination]);
Swiper.use([Keyboard]);
const sliderTwo = () => {
  const swiper = new Swiper('.swiper-two', {
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

    navigation: {
      nextEl: '.description__slider-prev',
      prevEl: '.description__slider-next',
    },
  });
  swiper.on('slideChange afterInit init', function () {
    let currentSlide = this.activeIndex + 1;
    document.querySelector('.counter-two').innerHTML = `
    <span class="counter__current-two">
    ${currentSlide}
    </span>
    /
    <span class="counter__total-two">
      ${this.slides.length}
    </span>`;
  });

  swiper.init();
};

export default sliderTwo;

