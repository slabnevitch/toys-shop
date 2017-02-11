function initMap() {
  // var myLatLng = {lat: 55.920252, lng: 37.758809};

  // var map = new google.maps.Map(document.getElementById('map'), {
  //   zoom: 15,
  //   center: myLatLng
  // });

  // var marker = new google.maps.Marker({
  //   position: myLatLng,
  //   map: map,
  //   title: 'elwau.ru!'
  // });

   var toys = {lat: 55.920252, lng: 37.758809};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: toys
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Elwau.ru</h1>'+
      '<div id="bodyContent">'+
      '<p>Магазин радиоуправляемых игрушек</p>'+
      '<p>Адрес: 105118, г.Москва, ул. Кирпичная, д. 22 Тел.: +7 (495) 540-55-11, 8 (800) 555-55-90 Email: info@elwau.ru </p>'
      
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: toys,
    map: map,
    title: 'Uluru (Ayers Rock)'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}
