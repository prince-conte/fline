$(function(){
  
  var BREAKPOINT_MOBILE_INT = 767;
  var BREAKPOINT_DESKTOP_INT = 768;
  var BREAKPOINT_MOBILE  = '(max-width: ' + BREAKPOINT_MOBILE_INT + 'px)';
  var BREAKPOINT_DESKTOP = '(min-width: ' + BREAKPOINT_DESKTOP_INT + 'px)';
  
  
  function initCatalogSlider() {
    
  if (Modernizr.mq(BREAKPOINT_DESKTOP)) {
  
    $('.js-catalog-grid-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      fade: true,
      autoplaySpeed: 500,
      dots: false
    });
   } 
    
    var $this = $(this);

    $('.js-slider-hover').on('mouseover',function(){

      $this = $(this).find('.js-catalog-grid-slider');
      $this.slick('slickPlay');

    });

    $('.js-slider-hover').on('mouseout',function(){
      $this.slick('slickPause');

    });
  }

  
  $(window)
      .load(function() {
          initCatalogSlider();
      })
      .resize(function() {
          initCatalogSlider();
      });


});
  

