

// navBar animation

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".navbar__nav");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("show");
});

//swiperJs4wetLandsRole
 var swiper = new Swiper('.wetLands__role .swiper', {
      slidesPerView: 2,
     
      spaceBetween: 60,
      grabCursor: true,
      loop:true,
      pagination: {
        el: '.wetLands__role .swiper-pagination',
        clickable: true,
        dynamicBullets : true,
        
      },

      loop:true,
       autoplay: {
        delay:1700,
        disableOnInteraction: false,

      },
    });

//swiperJs4wetLandsWildLife
 var swiper = new Swiper('.wetLands__wildLife__info__cards .swiper', {
      slidesPerView: 3,
     
      spaceBetween: 20,
      grabCursor: true,
      loop:true,
      pagination: {
        el: '.wetLands__wildLife__info__cards .swiper-pagination',
        clickable: true,
        dynamicBullets : true,
        
      },

      loop:true,
       autoplay: {
        delay:1700,
        disableOnInteraction: false,

      },
    });

// seasonsSlider
const seasonCards = document.querySelectorAll(".wetLands__seasons__card");

seasonCards.forEach((card) => {
  card.addEventListener("click", () => {
    seasonCards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
  });
});

// wowJs
  new WOW({
    boxClass:     'wow',
    animateClass: 'animate__animated',
    offset:       170,        
    mobile:       true,
    live:         true
  }).init();
