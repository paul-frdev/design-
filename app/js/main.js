$(function () {

  $('.news-slider__items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  });

  $('.select__list').styler()

  // $('..jq-selectbox select').()

  var mixer = mixitup('.portfolio__content');


});

foo.onclick = function () {
  this.classList.toggle('rotate')
}