$(function(){


$('.js-slider').slick({
  arrows: false,
  customPaging: function(slider, i) {
      return $('<span></span>');
  },
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  slidesToShow: 1,
  adaptiveHeight: true
});
  
});