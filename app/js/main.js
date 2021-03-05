$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.news-slider__items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [{
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  });

  $('.select__list').styler();

  $('.review-slider__items').slick({
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/review/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/review/arrow-right.svg" alt="arrow-right"></button>',
    responsive: [{
      breakpoint: 1250,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
      }
    }, ]
  });

  var mixer = mixitup('.portfolio__content');

});


document.querySelector('.select__list').onchange = function() {
	const a = document.createElement('a')
  a.href = this.value
  a.click()
}