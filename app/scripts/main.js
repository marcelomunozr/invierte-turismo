/*$(window).load(function(){
  $.each($('.gmap-markers'), function(index, value){
      var latitud = $(this).data('latitud');
      var longitud = $(this).data('longitud');
      var nombre = $(this).data('nombre');
      var direccion = $(this).data('direccion');
    var locacion = "Location " + index;
    gmarkers[index] = createMarker(new google.maps.LatLng(latitud, longitud), nombre + "<br>" + direccion);
  })
});
*/

jQuery(function($){
  $('.filter-open a').click(function()
  {
    $('.control-filter').toggleClass('aparece');
  });

});

$(window).load(function() {
  /*IGUALAR ALTOS*/
});
