ymaps.ready(function () {
    var myMap = new ymaps.Map('mapy', {
            center: [55.64659997, 37.63072419],
            zoom: 4,
            controls: ['zoomControl', 'typeSelector',  'fullscreenControl']
        }, {
            searchControlProvider: 'yandex#search'
        });
    
  
    myMap.behaviors.disable('scrollZoom'); 

});