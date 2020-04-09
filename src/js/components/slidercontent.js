// SLIDER CONTENT


function scrollContentTranslate(event) {
  var targetOffset = ($(event.target).closest('.c-slidercontent').offset().top);
  if (window.matchMedia('(max-width: 768px)').matches) {
    $('html, body').animate({scrollTop : targetOffset}, 600);
  }
}

function scrollContentTranslated(event) {
}


$('.c-slidercontent .owl-carousel').owlCarousel({
    items:1,
    animateIn: 'fadeIn',
    nav:false,
    dots: true,
    dotsData: true,
    margin:10,
    mouseDrag:false,
    touchDrag:false,
    autoHeight:true,
    onTranslate: scrollContentTranslate,
    onTranslated: scrollContentTranslated,
})
