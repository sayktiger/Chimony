document.addEventListener(`DOMContentLoaded`, () => {
    const keys = new Swiper('.keys__swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.keys__swiper-pagination',
          clickable: true
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
          clickable: true
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

      const newsSlider = new Swiper('.news-slider__swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.news-slider__swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.news-slider__swiper-button-next',
          prevEl: '.news-slider__swiper-button-prev',
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

      //Меню
      const body = document.querySelector(`body`),
          menu = document.querySelector(`.menu`),
          burger = document.querySelector(`.header__mobile_burger`),
          mobileMenuLink = document.querySelectorAll(`.menu__item a`);
        
      
      burger.addEventListener(`click`, (e) =>{


        body.classList.toggle(`overflow`);
        menu.classList.toggle(`menu__active`);
        burger.classList.toggle(`header__mobile_burger_active`);
      });

      mobileMenuLink.forEach((item) =>{
        item.addEventListener(`click`, (e) =>{

          body.classList.remove(`overflow`);
          menu.classList.remove(`menu__active`);
          burger.classList.remove(`header__mobile_burger_active`);
        });
      });

      
      //Скрипт для плавного скролла по якорям
    const anchors = document.querySelectorAll('a[href^="#"]')

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const blockID = anchor.getAttribute('href');
        
        document.querySelector(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };

    //Скрипт модульно окна
    const modal = document.querySelector(`.modal`),
          modalClose = document.querySelector(`.modal__close`),
          modalLink = document.querySelectorAll(`.modal__link`),
          modalBlock = document.querySelector(`.modal__block`);
    
    modalLink.forEach((item) =>{
      item.addEventListener(`click`, (e) =>{

        body.classList.add(`overflow`);
        modal.classList.add(`modal__active`);
      })
    });

    modalClose.addEventListener(`click`, () =>{
      body.classList.remove(`overflow`);
      modal.classList.remove(`modal__active`);
    });

    modal.addEventListener(`click`, (e)=>{

      if(!modalBlock.contains(e.target)){
        body.classList.remove(`overflow`);
        modal.classList.remove(`modal__active`);
      }
    });

    //мобильный поиск
    const mobileButton = document.querySelector(`.header__mobile_search`),
      mobileInput = document.querySelector(`.input`);

      mobileButton.addEventListener(`click`, (e) =>{
        e.preventDefault();

        mobileInput.classList.toggle(`input__active`);
      });
});