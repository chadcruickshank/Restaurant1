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

var appetizer = [
  {
    name: "Cow Heel Soup ",
    price: "20",
    description: "",
  },
  {
    name: "Ceasar Salad",
    price: "15",
    description: "",
  },
  {
    name: "Cow Heel Soup ",
    price: "20",
    description: "",
  },
  {
    name: "Ceasar Salad",
    price: "15",
    description: "",
  },
  {
    name: "Cow Heel Soup ",
    price: "20",
    description: "",
  },
  {
    name: "Ceasar Salad",
    price: "15",
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
    description: "",
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
    description: "description",
  },
  {
    name: "Bloody Marry",
    price: "50",
    description: "description",
  },
  {
    name: "Gin and Tonic",
    price: "20",
    description: "description",
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
