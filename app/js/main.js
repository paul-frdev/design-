$(function () {

  $('.news-slider__items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
      breakpoint: 1260,
      settings: {
        slidesToShow: 2,
    slidesToScroll: 1,
      }
    }, ]
  });

  $('.select__list').styler();

  $('.review-slider__items').slick({
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/review/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/review/arrow-right.svg" alt="arrow-right"></button>',
    responsive: [{
      breakpoint: 1350,
      settings: {
        centerMode: true,
        variableWidth: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    }, ]
  });

  var mixer = mixitup('.portfolio__content');

});


var smy = document.getElementById("s1");
var assilka = document.getElementById("a1");

smy.onchange = function OnChange() {
  switch (smy.selectedIndex) {
    case 0:
      assilka.href = "Selected-0";
      break;
    case 1:
      assilka.href = "Selected-1";
      break;
    case 2:
      assilka.href = "Selected-2";
      break;
  }
}