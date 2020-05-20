
ymaps.ready(init);
function init(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [34.862576, -111.793017],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 7
  })

  var myPlacemark = new ymaps.Placemark([34.862576, -111.793017], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icon-map-marker.svg',
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  });

  myMap.geoObjects.add(myPlacemark);
};
