$(function(){
  
  $('.js-open-content').on('click', function () {
    
    if ($(this).hasClass('is-active')) {
      
      $(this).removeClass('is-active');
      $('.js-index-about__hidden-content').css('display','none');
      
    }  else {
      
      $(this).addClass('is-active');
      $('.js-index-about__hidden-content').css('display','none');
      
      var elementClick = $('.js-index-about-content');
			var destination = $(elementClick).offset().top - 40;
      
			$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
      $('.js-index-about__hidden-content').css('display','block');
    }
    
    return false;
  });
    
});