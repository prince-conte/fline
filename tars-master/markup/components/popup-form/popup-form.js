$(function(){
  
  $('.js-mobile-menu-close').on('click', function () {
    $('.js-mobile-fade').delay(500).fadeOut(500);
    $('.js-popup-form').fadeOut(500);
    return false
  });
});


  function openForm() {
        
    $('.js-mobile-fade').fadeIn(500);
    $('.js-popup-form').delay(500).fadeIn(500);

    setTimeout(function(){
      $('.js-select').select2('close'); // Close select2 dropdown to prevent wrong repositioning
      setSelect2ContainerProperWidth();
    }, 500);
    return false
  };

  $('.js-popup-form-open').on('click', function () {
    openForm();
  });