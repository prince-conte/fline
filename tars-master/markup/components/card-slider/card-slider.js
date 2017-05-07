$(function(){


  $('.js-card-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false
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