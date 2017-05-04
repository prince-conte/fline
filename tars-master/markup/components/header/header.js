$(function(){

  var $langSwitch = $('.js-lang-switch');
  var $langSwitchWidth = $langSwitch.outerWidth();
  var $langSwitchHeight = $langSwitch.outerHeight();
  var $langSwitchBox = $('.js-lang-box');
  var $langSwitchItem = $('.header__lang-switch-item');
  
  
  function switchSize() {
    $langSwitchBox.css('width',$langSwitchWidth);
  }
  
  $langSwitchBox.css('width',$langSwitchWidth);
  $langSwitchBox.css('min-height',$langSwitchHeight);
  
  
   $langSwitchItem.on('click', function () {
     
     $langSwitchItem.attr('data-active', 'false');
     $(this).attr('data-active', 'true');
     
     return false;
   })
  
$(window)
    .load(function () {
        switchSize()
    })
    .smartresize(function() {
        switchSize()
    });

  
});
