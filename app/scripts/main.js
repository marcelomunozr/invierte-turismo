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
"use strict";
var locations = [["Isla Navarino","Lodge","Regi\u00f3n de Magallanes, Comuna de Cabo de Hornos","-54.9367278","-67.62428055555554","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/31-isla-navarino-by-alveart-flickr-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/isla-navarino\/","region-de-magallanes"],["Tierra del Fuego","Lodge de pesca","Regi\u00f3n de Magallanes, Comuna de Timaukel","-54.2197611","-69.63851111111111","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/30-rio-paralelo_por-Oscar-Ordenes-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/tierra-del-fuego\/","region-de-magallanes"],["Estrecho de Magallanes","Lodge de pesca y monta\u00f1a en R\u00edo Batchelor","Regi\u00f3n de Magallanes, Comuna de Punta Arenas","-53.4581222","-72.35035277777777","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/29-entrecho-de-magallanes-by-Marie-Louise-Roux-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/estrecho-de-magallanes\/","region-de-magallanes"],["R\u00edo Verde (Fiordo La Pera)","Lodge o caba\u00f1as","Regi\u00f3n de Magallanes, Comuna de R\u00edo Verde","-52.6689139","-72.43558611111112","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/FiordolaPera3_MBN.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/rio-verde-fiordo-la-pera\/","region-de-magallanes"],["Puerto Bories","Hotel","Regi\u00f3n de Magallanes, Comuna de Natales","-51.6935222","-72.52856944444444","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/27-puerto-bories-by-povl-abrahamsen-flickr-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/puerto-bories\/","region-de-magallanes"],["R\u00edo Serrano","Lodge, caba\u00f1as y domos","Regi\u00f3n de Magallanes, Comuna de Torres del Paine","-51.2455667","-72.99514444444445","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/\u00b5rea-R\u00b0o-Serrano_sector-plano_MBN-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/rio-serrano\/","region-de-magallanes"],["Lago Christie","Refugio de monta\u00f1a","Regi\u00f3n de Ays\u00e9n, Comuna de Villa O\u2019Higgins","-48.1470639","-72.45451666666666","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/2013-04-24-11.29.23_MBN-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/lago-christie\/","region-de-aysen"],["Lago Leal","Hoster\u00eda","Regi\u00f3n de Ays\u00e9n, Comuna de Tortel","-48.0162306","-73.12201388888889","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/24-lago-leal-patagonialoslagos-cl-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/lago-leal\/","region-de-aysen"],["Caleta Tortel","Hoster\u00eda","Regi\u00f3n de Ays\u00e9n, Comuna de Tortel","-47.7998028","-73.53601666666667","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/23-caleta-tortel-by-sebasu-flickr-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/caleta-tortel\/","region-de-aysen"],["Valle del R\u00edo Baker","Ecocamp y yurts","Regi\u00f3n de Ays\u00e9n, Comuna de Cochrane","-47.2750583","-72.7487888888889","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/22-rio-baker-by-nrdc_media-flickr-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/valle-del-rio-baker\/","region-de-aysen"],["Laguna La Negra","Hotel de nicho","Regi\u00f3n de Los Lagos, Comuna de Palena","-43.6486722","-72.15563611111112","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/1_MBN-1.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/laguna-la-negra\/","region-de-los-lagos"],["Laguna La Golondrina","Hotel de nicho","Regi\u00f3n de Los Lagos, Comuna de Palena","-43.6267639","-72.12422222222222","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/2_MBN.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/laguna-la-golondrina\/","region-de-los-lagos"],["Fundo Piedras Blancas","Lodge con actividades de turismo de naturaleza","Regi\u00f3n de Los Lagos, Comuna de Puerto Montt","-41.4570583","-72.61525833333333","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/DSC01916_MBN-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/fundo-piedras-blancas\/","region-de-los-lagos"],["Valle de Cocham\u00f3","Camping y hostal de lujo","Regi\u00f3n de los Lagos, Comuna de Cocham\u00f3","-41.3556611","-72.10188055555555","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/Cochamo-Las-Juntas-4_MBN-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/valle-de-cochamo\/","region-de-los-lagos"],["Las Cascadas","Conjunto de caba\u00f1as y camping","Regi\u00f3n de Los Lagos, Comuna de Puerto Octay","-41.0740139","-72.616575","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/FIGURA-4.1_MBN-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/las-cascadas\/","region-de-los-lagos"],["Isla Sof\u00eda del R\u00edo Valdivia","Parador","Regi\u00f3n de Los R\u00edos, Comuna de Corral","-39.8575417","-73.31789166666667","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/16-isla-sofia_MBN-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/isla-sofia-del-rio-valdivia\/","region-de-los-rios"],["Quirra Quirra","Eco Hotel","Regi\u00f3n de la Araucan\u00eda, Comuna de Puc\u00f3n","-39.3036917","-71.66056388888889","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/QUIRRA-QUIRRA-17_MBN-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/12-quirra-quirra\/","region-de-la-araucania"],["Laguna del Maule","Caba\u00f1as","Regi\u00f3n del Maule, Comuna de San Clemente","-36.0286667","-70.56124166666666","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/2012-11_Laguna-del-Maule-SSeisdedos-9_MBN-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/laguna-del-maule\/","region-del-maule"],["Alto Maule","Lodge con aguas termales","Regi\u00f3n del Maule, Comuna de San Clemente","-35.9506528","-70.58594444444444","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/2012-11_Laguna-del-Maule-SSeisdedos-8_MBN-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/alto-maule\/","region-del-maule"],["Parque Nacional Radal Siete Tazas","Turismo de naturaleza","Regi\u00f3n del Maule, Comuna de Molina","-35.4558028","-71.03353888888888","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/MONO-ANDES-ESTERO-2-EL-BOLSON_MBN-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/parque-nacional-radal-siete-tazas\/","region-del-maule"],["Bah\u00eda Inglesa al Oriente","Hotel de nicho","Regi\u00f3n de Atacama, Comuna de Caldera","-27.1169056","-70.85213333333333","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/DSC_5027_SERNATUR-Atacama-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/7-bahia-inglesa-al-oriente\/","region-de-atacama"],["Caleta Chipana","Camping para motor home","Regi\u00f3n de Tarapac\u00e1, Comuna de Iquique","-21.3381306","-70.0863","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/01-CHIPANA-1_MBN-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/caleta-chipana\/","region-de-tarapaca"],["Playa Ike Ike","Camping para motor home y domos","Regi\u00f3n de Tarapac\u00e1, Comuna de Iquique","-21.150225","-70.11439166666666","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/02-IKE-IKE-1_Ministerio-de-Bienes-Nacionales-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/playa-ike-ike\/","region-de-tarapaca"],["Caleta Chanavayita","Caba\u00f1as, camping y servicios complementarios","Regi\u00f3n de Tarapac\u00e1, Comuna de Iquique","-20.7048917","-70.18456944444445","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/P1040001_MBN-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/caleta-chanavayita\/","region-de-tarapaca"],["Caleta Los Verdes","Caba\u00f1as y servicios complementarios","Regi\u00f3n de Tarapac\u00e1, Comuna de Iquique","-20.4297306","-70.1605138888889","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/LOS-VERDES-1_VacacionaCaleta-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/caleta-los-verdes\/","region-de-tarapaca"],["Pica","Caba\u00f1as y servicios complementarios","Regi\u00f3n de Tarapac\u00e1","-20.4999111","-69.34506666666667","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/2-pica-by-francisco-rojas-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/pica\/","region-de-tarapaca"],["Arica","Hoteler\u00eda Costanera Sur","Regi\u00f3n de Arica y Parinacota, Comuna de Arica","-18.4995806","-70.31922222222222","http:\/\/www.invierteturismo.cl\/wp-content\/uploads\/2016\/07\/1-borde-costero-arica-by-sernatur-388x388.jpg","http:\/\/www.invierteturismo.cl\/oportunidad\/arica\/","region-de-arica-y-parinacota"]];

jQuery(function($){
  /*Nuevo mapa*/
  var northEast = L.latLng(-17.53, -66.433333),
      southWest = L.latLng(-55.3766879, -77.8346457),
      bounds = new L.LatLngBounds(southWest, northEast);

  L.CRS.CustomZoom = L.extend({}, L.CRS.EPSG3857, {
      scale: function (zoom) {
          return 256 * Math.pow(1.1, zoom);
      }
  });

  var homemap = new L.map('themap', {
    center: new L.LatLng(-33.4446875, -70.6586297),
    zoom: 20,
    crs: L.CRS.CustomZoom,
    attributionControl: false,
    zoomControl: false,
    dragging: false,
    touchZoom: false,
		scrollWheelZoom: false,
		doubleClickZoom: false,
		boxZoom: false
  });

  var homebullet = L.icon({
    iconUrl: 'images/home-bullet.png',
    iconSize: [6, 6], // size of the icon
  });

  for(var i = 0; i < locations.length; i++){
    L.marker([locations[i][3], locations[i][4]], {icon: homebullet}).addTo(homemap);
  }

  // L.marker([-17.53, -66.433333], {icon: homebullet}).addTo(homemap);
  // L.marker([-55.3766879, -77.8346457], {icon: homebullet}).addTo(homemap);

  function customZoom(map, point1, point2) {
      var zoom = map.getMinZoom(),
          maxZoom = map.getMaxZoom(),
          size = map.getSize(),
          zoomNotFound = true,
          boundsSize;
      do {
          zoom++;
          boundsSize = map.project(point2, zoom).subtract(map.project(point1, zoom)).floor();
          zoomNotFound = size.contains(boundsSize);
      } while (zoomNotFound && zoom <= maxZoom);
      return zoom - 1;
  }

  var zoom = customZoom(homemap, southWest, northEast);
  var center = new L.LatLng(-38.6, -62);
  L.marker(center, {icon: homebullet}).addTo(homemap);
  homemap.setView(center,zoom);

  $.getJSON('data/southamerica.json', function(data) {
    function style(feature){
      return {
        fillColor: 'transparent',
        weight: 1,
        opacity: 1,
        color: '#ffffff',
        fillOpacity: 0.9
      };
    }
    var southamerica = L.geoJson(data, {
      style : style
    });
    homemap.addLayer(southamerica);
  });

  $.getJSON('data/chile-regiones.json', function(data) {
    function style(feature){
      return {
        fillColor: '#f7e7e7',
        weight: 1,
        opacity: 1,
        color: '#614776',
        fillOpacity: 0.9
      };
    }

    var geojson = L.geoJson(data, {
      onEachFeature: onEachFeature,
      style : style
    });

    var geojsonover = L.geoJson(data, {
      onEachFeature: onEachFeatureOver,
      style : style
    });

    for(var i = 0; i < locations.length; i++){
      L.marker([locations[i][3], locations[i][4]], {icon: homebullet}).addTo(geojsonover);
    }

    homemap.addLayer(geojson);

    var lupa = L.magnifyingGlass({
      layers: [geojsonover],
      zoomOffset: 6,
      radius: 100
    });

    homemap.addLayer(lupa);

    function onEachFeature(feature, layer){
      var label = L.marker(layer.getBounds().getCenter(), {
        icon: L.divIcon({
          className: 'region-link',
          html: '<a href="#">'+feature.properties.Region+'</a>',
          iconSize: [200, 0]
        })
      }).addTo(homemap);
      layer.on({
        click: onChileClick,
        mouseover: onChileIn,
        mouseout: onChileOut
      })
    }

    function onEachFeatureOver(feature, layer){


      var label = L.marker(layer.getBounds().getCenter(), {
        icon: L.divIcon({
          className: 'region-link',
          html: '<a href="#"><span>'+feature.properties.Region+'</span></a>',
          iconSize: [0, 100]
        })
      });
      layer.on({
        click: onChileClick,
        mouseover: onChileIn,
        mouseout: onChileOut
      })
    }

    function onChileClick(e){

    }

    function onChileIn(e){
      console.log('chileIn');

      var layer = e.target;
      layer.setStyle({
         weight: 1,
         fillColor: '#ffffff',
         fillOpacity: 1
      });
      if (!L.Browser.ie && !L.Browser.opera) {
         layer.bringToFront();
      }
    }
    function onChileOut(e){
      console.log('chileOut');
      geojson.resetStyle(e.target);
    }

  });






  /*CAROUSEL HOMI*/
  $('.carousel-author').html('<span class="glyphicon glyphicon-camera"></span> '+ $('#carousel-homi').find(".item.active").data('author'));

  $("#carousel-homi").on("slid.bs.carousel",function(){
    var carouselData = $(this).data('bs.carousel');
    var active = carouselData.$element.find('.item.active');
    $('.carousel-author').html('<span class="glyphicon glyphicon-camera"></span> '+ active.data('author'));
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
