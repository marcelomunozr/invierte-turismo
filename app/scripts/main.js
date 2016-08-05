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

  /*LUPITA QUIERE*/
  $(".magnify").jfMagnify({
    center: false
  });
  $('.magnify_glass').animate(/*{
    'top':'0',
    'left':'16%'
    },*/{
    duration: 400,
    progress: function(){
        $(".magnify").data("jfMagnify").update();
    },
    ease: "easeInQuint"
  });

  $('[data-toggle="tooltip"]').tooltip()

  /*FILTRO*/
  $('.filter-open a').click(function(event){
    event.stopPropagation();
    $('.control-filter').stop(true, true).toggleClass('aparece');
    event.preventDefault();
  });


  $('.cerrar-oportunidad').click(function(event){
    event.stopPropagation();
    $('.descripcion-oportunidad').stop(true, true).animate({top : '100%'});
    $('.descripcion-oportunidad').delay(300).slideToggle();//.css({'opacity' : '0'});
    event.preventDefault();
  });

  $('.cerrar-region').click(function(event){
    event.stopPropagation();
    $('.descripcion-region').stop(true, true).animate({right : '100%'}).css({'left': 'inherit'});
    $('.descripcion-region').delay(300).slideToggle();//.css({'opacity' : '0'});
    event.preventDefault();
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

  $(window).on('load', function() {
    /*IGUALAR ALTOS*/
  });
});

