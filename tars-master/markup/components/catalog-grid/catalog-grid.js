$(function(){


  $('.js-catalog-grid-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    fade: true,
    autoplaySpeed: 500,
    dots: false
  });
  
  var $this = $(this);

$('.js-slider-hover').on('mouseover',function(){
  
  $this = $(this).find('.js-catalog-grid-slider');
  $this.slick('slickPlay');
  
});
    
$('.js-slider-hover').on('mouseout',function(){
  $this.slick('slickPause');
  
});
  
  
});