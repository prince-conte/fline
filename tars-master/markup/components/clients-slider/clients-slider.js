$(function(){
  $('.js-clients-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    customPaging: function(slider, i) {
        return $('<span></span>');
    },
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false
        }
      }
    ]
  });
  
  
  $('.js-client-next').on('click',function(){
    $('.js-clients-slider').slick('slickNext');
    return false;
  });
    
  $('.js-client-prev').on('click',function(){
    $('.js-clients-slider').slick('slickPrev');
    return false;
  });
  
});
	