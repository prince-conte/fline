$(function(){
	
	var $backToTop = $('.js-back-to-top');
	var $siteFooterHeight = $('#footer').outerHeight();
  var $pageHeight = $(document).height();
	
	
		$backToTop.click(function () {
		
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top;
			jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
			return false;

		});
	
	$(window).scroll(function() {
			if (($(this).scrollTop() >= $pageHeight - $siteFooterHeight * 4)) {
					$backToTop.addClass('back-to-top--is-active')
			}
			else {
				$backToTop.removeClass('back-to-top--is-active')
			}

	});
	

	
	
	
});