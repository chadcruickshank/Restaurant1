// Top picks carousel

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    800: {
      items: 3,
    },

    1300: {
      items: 4,
    },
  },
});

// Menu

$(".appetizers,.mainCourse,.drinks").click(function () {
  alert("working");
});
