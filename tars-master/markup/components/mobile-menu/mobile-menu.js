$(function(){
  
  $('.js-mobile-menu-open').on('click', function () {
    
    $('.js-mobile-fade').fadeIn(500);
    $('.js-mobile-menu').delay(500).fadeIn(500);
    
  });
    
  $('.js-mobile-menu-close').on('click', function () {
    
    $('.js-mobile-fade').delay(500).fadeOut(500);
    $('.js-mobile-menu').fadeOut(500);
    
  });
  
});