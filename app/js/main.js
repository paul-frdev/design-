$(function () {

  $('.news-slider__items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
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
   });

  var mixer = mixitup('.portfolio__content');

});
