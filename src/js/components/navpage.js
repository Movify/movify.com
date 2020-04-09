// SLIDER BULLET

(function ( $ ) {

var navPage = $('.c-nav-page');
var navPageNav = $('.c-nav-page__nav');
var navPageNavItem = $('.c-nav-page__nav__item');
var navPageItem = $('.c-nav-page__item');
var url = window.location.hash;
var currentTarget = url.split("#").pop();

$.fn.check = function() {
  var url = window.location.hash;
  var currentTarget = url.split("#").pop();
  navPageItem.each(function(index) {
    var targetData = $(this).attr('data-nav-page');
    if(targetData.match(currentTarget) && currentTarget != ''){
      $(this).delay('').fadeIn('slow');
      $('.c-nav-page__nav__item').removeClass('c-nav-page__nav__item--active');
      $('.c-nav-page__nav__item[data-nav-page-target=' + currentTarget +']').addClass('c-nav-page__nav__item--active');
    }else{
      $(this).fadeOut('100');
    }
  });
}


$(window).on('hashchange', function(){
  var url = window.location.hash;
  var currentTarget = url.split("#").pop();
  navPage.attr('data-nav-page-active',currentTarget);
  navPageItem.check();
});


navPageItem.check();


}( jQuery ));
