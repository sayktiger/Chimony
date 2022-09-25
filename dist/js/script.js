document.addEventListener(`DOMContentLoaded`, () => {
    const keys = new Swiper('.keys__swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.keys__swiper-pagination',
        },
        navigation: {
          nextEl: '.keys__swiper-button-next',
          prevEl: '.keys__swiper-button-prev',
        },
        spaceBetween: 50,
        speed: 800,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      }
      });

      const news = new Swiper('.news__swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.news__swiper-pagination',
        },
        navigation: {
          nextEl: '.news__swiper-button-next',
          prevEl: '.news__swiper-button-prev',
        },
        spaceBetween: 50,
        speed: 800,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      }
      });
});