// Top picks carousel

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

//meal corousel
var swiper = new Swiper(".sigMealCarousel", {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 20,
  // autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerColumn: 2,
    },

    300: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 30,
    },

    700: {
      slidesPerView: 3,
      slidesPerColumn: 2,
    },
  },
});

// drinks and desserts carousel
var swiper2 = new Swiper(".sigCarousel", {
  slidesPerView: 3,

  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 3,
    },
  },
});
