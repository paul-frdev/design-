$(function () {

  $('.news-slider__items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  });

  $('.select__list').styler();

  $('.review-slider__inner').slick({
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  });

  var mixer = mixitup('.portfolio__content');

});
