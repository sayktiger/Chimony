document.addEventListener(`DOMContentLoaded`, () => {
    const keys = new Swiper('.keys__swiper', {
        direction: 'horizontal',
        loop: false,
        pagination: {
          el: '.keys__swiper-pagination',
        },
        navigation: {
          nextEl: '.keys__swiper-button-next',
          prevEl: '.keys__swiper-button-prev',
        },
      });
});