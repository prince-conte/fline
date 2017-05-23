$(function(){


  $('.js-card-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    infinite: true,
    fade: true,
    dots: false,
    customPaging: function(slider, i) {
        return $('<span></span>');
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true
        }
      }]
  });
  
  
  $('.js-card-switch:nth-child(1)').on('click', function () {
  
    $('.js-card-slider').slick('slickGoTo',0);
  
  });

    
  
  $('.js-card-switch:nth-child(2)').on('click', function () {
    console.log('dfs');
  
    $('.js-card-slider').slick('slickGoTo',1);
    
  
  });

      
  
  $('.js-card-switch:nth-child(3)').on('click', function () {
  
    $('.js-card-slider').slick('slickGoTo',2);
    
  });
      
  
  $('.js-card-switch:nth-child(4)').on('click', function () {
  
    $('.js-card-slider').slick('slickGoTo',3);
    
  });
  
  $('.js-card-switch:nth-child(5)').on('click', function () {
  
    $('.js-card-slider').slick('slickGoTo',4);

  });

  
}); 