

// navBar animation

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".navbar__nav");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("show");
});

//swiperJs
 var swiper = new Swiper('.swiper', {
      slidesPerView: 2,
     
      spaceBetween: 60,
      grabCursor: true,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
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
