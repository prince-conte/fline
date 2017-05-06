$(function(){

  var $footer = 
  
  
  $('.js-production-menu').on('click', function () {
    
    var thisMenu = $(this).closest('.footer__production-menu-item');
    
    if (thisMenu.hasClass('is-active')) {
      thisMenu.removeClass('is-active')
    } else {
      thisMenu.addClass('is-active')
    }
    
    
  });
  
  
  


function siteFooterInit() {
  var $siteBody = $('.page');
  var $siteFooter = $('#footer');
  var $pageHeight = $(window).height();
  var $siteHeader = $('#header');
  
    if ($siteFooter.length) {
      $('#main').css('min-height', $pageHeight - $siteHeader.height());
      $('#main').css('padding-bottom', $siteFooter.outerHeight());

      $siteBody.css({
        'opacity': 1,
        'visibility': 'visible'
      });
    }
}

$(window)
    .load(function() {
        siteFooterInit();
    })
    .resize(function() {
        siteFooterInit();
    });
});
