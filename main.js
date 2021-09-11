// Menu

var appetizer = [
  {
    name: "Guacamole ",
    price: "30",
    description: "",
  },
  {
    name: "Shrimp Cocktail",
    price: "45",
    description: "",
  },
  {
    name: "Roasted Salsa ",
    price: "25",
    description: "",
  },
  {
    name: "Crab Cakes",
    price: "20",
    description: "",
  },
  {
    name: "Honey Mustard Wings ",
    price: "25",
    description: "",
  },
  {
    name: "Cream of Mushroom Soup ",
    price: "40",
    description: "",
  },
];

var mainCourse = [
  {
    name: "Chicken Parmesan",
    price: "50",
    description: "Creamy aldente noodles in parmesan sauce",
  },
  {
    name: "Roast Chicken",
    price: "40",
    description: "Tender Roast Chicken Served on Rice with Grilled Vegetables",
  },
  {
    name: "Cheeseburger",
    price: "35",
    description: "Double Stuffed Cheeseburger",
  },
];

var drinks = [
  {
    name: "Margarita",
    price: "45",
    description: "",
  },
  {
    name: "Bloody Marry",
    price: "50",
    description: "",
  },
  {
    name: "Gin and Tonic",
    price: "20",
    description: "",
  },
];

for (i = 0; i < appetizer.length; i++) {
  $(".menu-items").prepend(
    "<div class='menuStyling'>" +
      "<p class='foodName'>" +
      appetizer[i].name +
      "</p>" +
      "<p class='foodPrice'>" +
      "$" +
      appetizer[i].price +
      "</p>" +
      "<p class='foodDescription'>" +
      appetizer[i].description +
      "</p>" +
      "</div>"
  );
}

$("#appetizer,#mainCourse,#drinks").click(function () {
  var foodType = "";
  $(".menuStyling").remove();
  $(".closeMenu").css("display", "block");
  $(".menuCategories span").removeClass("active");
  $(this).addClass("active");

  // $("li").$(this).addClass("active");
  if ($(this).attr("id") == "appetizer") {
    foodType = appetizer;
  } else if ($(this).attr("id") == "mainCourse") {
    foodType = mainCourse;
  } else {
    foodType = drinks;
  }

  for (i = 0; i < foodType.length; i++) {
    $(".menu-items").prepend(
      "<div class='menuStyling'>" +
        "<p class='foodName'>" +
        foodType[i].name +
        "</p>" +
        "<p class='foodPrice'>" +
        "$" +
        foodType[i].price +
        "</p>" +
        "<p class='foodDescription'>" +
        foodType[i].description +
        "</p>" +
        "</div>"
    );
  }
  //^for loop
});

$(".closeMenu").click(function () {
  $(".menuStyling").remove();
  $(".closeMenu").css("display", "none");
  $(".pagination li span").removeClass("active");
});

var swiper2 = new Swiper(".topPicksSlider", {
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
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive");
