ymaps.ready(function () {
    var myMap = new ymaps.Map('mapy', {
            center: [55.64659997, 37.63072419],
            zoom: 16,
            controls: ['zoomControl', 'typeSelector',  'fullscreenControl']
        }, {
            searchControlProvider: 'yandex#search'
        })
    
        myPlacemark = new ymaps.Placemark([55.65358017, 37.63009227], {
            hintContent: 'Собственный значок метки',
            balloonContent: '<br>Россия, г. Москва,<br>Каширский проезд, д.23, стр. 4<br>+7 (495) 411 53 40'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'static/img/general/mapy.png',
            // Размеры метки.
            iconImageSize: [28, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-14, -22]
        });
    
    myMap.geoObjects.add(myPlacemark);

});