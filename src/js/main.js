//@prepros-prepend ../../node_modules/jquery/dist/jquery.js
//@prepros-prepend ../../node_modules/owl.carousel/dist/owl.carousel.js
//@prepros-prepend ../../node_modules/jquery-match-height/dist/jquery.matchHeight-min.js
//@prepros-prepend ../../node_modules/lottie-web/build/player/lottie.min.js
//@prepros-prepend plugins/lazysizes.js
//@prepros-prepend plugins/bgset.js
//@prepros-prepend plugins/relax.js

//@prepros-prepend components/map.js
//@prepros-prepend components/sliderbullet.js
//@prepros-prepend components/expand.js
//@prepros-prepend components/navpage.js
//@prepros-prepend components/formfile.js
//@prepros-prepend components/decorations.js
//@prepros-prepend components/slidercard.js
//@prepros-prepend components/slidercontent.js


var loaderHome = $(".c-header-home__loader > div");
loaderHome.each(function(index) {
  var loaderHomePath = $(this).attr('data-animation-path');
  var animationHome = bodymovin.loadAnimation({
    wrapper: this,
    animType: 'canvas',
    loop: false,
    path: loaderHomePath
  });
});

$(document).ready(function() {
  setTimeout(function() {
    $('.c-header-home__loader').addClass('c-header-home__loader--ready');
    $(".c-header-home__video__desktop").trigger('play');
    if (window.matchMedia('(max-width: 768px)').matches) {
      $(".c-header-home__video__mobile").trigger('play');
    }
  }, 3500);
});


function repeatOften() {
  var contentHome = $(".c-header-home__content");
  contentHome.each(function(index) {
    var videoTiming = $(".c-header-home__video video").get(0).currentTime;
    var timingFrom = $(this).attr('data-timing-from');
    var timingTo = $(this).attr('data-timing-to');
    if(videoTiming > timingFrom && videoTiming < timingTo){
      $(this).fadeIn(500);
    }else{
      $(this).fadeOut(500);
    }
  });
}

setInterval(repeatOften, 500);

window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.customMedia = {
    '--small': '(max-width: 480px)',
    '--medium': '(max-width: 780px)',
    '--large': '(max-width: 1200px)'
};

$(document).ready(function() {
    $('.c-header-video').addClass('c-header-video--ready');
});

// MATCH HEIGHT

$('.js-match-height').matchHeight();

// CLICKABLE BOX

$(".js-click-box").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

// BURGER MENU

$(".c-navbar__burger").click(function(){
  $("body").toggleClass("u-state--overflow-hidden");
  $(".c-navbar").toggleClass("c-navbar--open");
});

// STICKY HEADER

var headerSticky = $(".c-navbar").data("sticky");
if(headerSticky == true){
  $(window).scroll(function(){
    var sticky = $('.c-navbar'),
        scroll = $(window).scrollTop();
    if(scroll < 50) {
      sticky.removeClass('c-navbar--sticky');
    }
    if(scroll >= 50){
      sticky.addClass('c-navbar--sticky');
    }
  });
};

// HEADER EFFECTS

$(document).ready(function() {
  var timingHeaderAppear = $( ".c-navbar" ).data( "timing-appear" );
  setTimeout(function() {
       $('.c-navbar').removeClass('c-navbar--hide');
  }, timingHeaderAppear);
});
