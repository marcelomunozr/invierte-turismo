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
  $('.filter-open a').click(function(){
    $('.control-filter').toggleClass('aparece');
  });

  /* PAGE SCROLL */
  $('.filter-go a').bind('click', function () {
    var $el = $(this)
      , id = $el.attr('href');
    $('section').animate({
      scrollTop: $(id).offset().top - 92
    }, 800);
    return false;
  });
  $('.filter-go a').on('click', function(){
    $('.btn-navbar').click(); //bootstrap 2.x
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
  });

  $(window).load(function() {
    /*IGUALAR ALTOS*/
  });
});

