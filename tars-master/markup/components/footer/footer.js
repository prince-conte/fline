$(function(){

//  var $footer = $('#footer');
//  var $main = $('#main');
//  
//  var $footerHeight = $footer.outerHeight;
//  
//  
//  alert($footerHeight);
// 
//  $main.css('min-height',$pageHeight);
//  $main.css('padding-bottom',$footerHeight);
  
  


function siteFooterInit() {
  var $siteBody = $('.page');
  var $siteFooter = $('#footer');
  var $pageHeight = $(document).height();
  var $siteHeader = $('#header');
  
    if ($siteFooter.length) {
        $('#main').css('min-height', $pageHeight - $siteHeader.height());
      console.log($siteHeader.height())
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
    .smartresize(function() {
        siteFooterInit();
    });
});
