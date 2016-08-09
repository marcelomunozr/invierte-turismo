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

  /*CAROUSEL HOMI*/
  $('.carousel-author').html('<span class="glyphicon glyphicon-camera"></span> '+ $('#carousel-homi').find(".item.active").data('author'));

  $("#carousel-homi").on("slid.bs.carousel",function(){
    var carouselData = $(this).data('bs.carousel');
    var active = carouselData.$element.find('.item.active');
    $('.carousel-author').html('<span class="glyphicon glyphicon-camera"></span> '+ active.data('author'));
  });


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
    $('.solapa-oportunidad').stop(true, true).animate({left : '0%'},200).css({'right': 'inherit'});
    event.preventDefault();
  });

  $('.cerrar-region').click(function(event){
    event.stopPropagation();
    $('.descripcion-region').stop(true, true).animate({right : '100%'}).css({'left': 'inherit'});
    $('.solapa-region').stop(true, true).animate({left : '0%'},200).css({'right': 'inherit'});
    event.preventDefault();
  });

  /*SOLAPA*/
  $('.solapa-region').click(function(event){
    event.stopPropagation();
    $('.descripcion-region').stop(true, true).animate({left : '0%'}).css({'right' : 'inherit'});
    $(this).stop(true, true).animate({right : '100%'},200).css({'left': 'inherit'});
    event.preventDefault();
  });
  $('.solapa-oportunidad').click(function(event){
    event.stopPropagation();
    $('.descripcion-oportunidad').stop(true, true).animate({top : '15'});
    $(this).stop(true, true).animate({right : '100%'},200).css({'left': 'inherit'});
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
    $('.btn-navbar').click();
    $('.navbar-toggle').click();
  });


  $(window).on('load', function() {
    /*IGUALAR ALTOS*/
  });
});
