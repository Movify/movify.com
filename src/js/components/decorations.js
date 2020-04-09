

// DECORATION

(function ( $ ) {

var decorationAnimation = $(".e-decoration__animation");
var decorationAnimationPath = decorationAnimation.attr('data-animation-path');

function loadBMAnimation(decorationAnimation) {
  var animation = bodymovin.loadAnimation({
    container: decorationAnimation,
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: decorationAnimationPath
  });
}

$(window).on( 'scroll', function(){
   decorationAnimation.each(function(index) {
     scrollOffset = window.scrollY;
     animationOffest = $(this).offset().top;
     animationStart = animationOffest - 600;
     animationPlay = $(this).attr('data-animation-play');
     decorationAnimationPath = $(this).attr('data-animation-path');
     if(scrollOffset > animationStart && animationPlay == 'false'){
        $(this).attr('data-animation-play','true');
        loadBMAnimation(decorationAnimation[index],decorationAnimationPath);
     }
   });
});

}( jQuery ));
