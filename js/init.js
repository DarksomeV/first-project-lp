 $( function() {
  //init tabs
  $( "#tabs" ).tabs();
  $( "#tabs-portfolio" ).tabs();
  //init slick carousel
  $('.reviews-carousel').slick({
  	dots:true,
  	prevArrow:'<div class="slick-prev slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-left"></i></div></div>',
  	nextArrow:'<div class="slick-next slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-right"></i></div></div>',
  });
  //Init Slick nav
  $('.header-nav').slicknav({
  	appendTo:'.header .container-fluid',
  	label:''
  });
 });