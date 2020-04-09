// SLIDER CARD


function slidercardNumbering(event) {
  var item = event.item.index;
  var items = event.item.count;
  var size = event.page.size;
  $(event.target).closest('.c-slidercard').find(".c-slidercard__numbering span:first-child").html(item + size);
  $(event.target).closest('.c-slidercard').find(".c-slidercard__numbering span:last-child").html(items);
  if(item == 0){
    $(event.target).closest('.c-slidercard').find(".c-slidercard__arrow--left").addClass('c-slidercard__arrow--disable');
  }else{
    $(event.target).closest('.c-slidercard').find(".c-slidercard__arrow--left").removeClass('c-slidercard__arrow--disable');
  }
  if(item + size == items){
    $(event.target).closest('.c-slidercard').find(".c-slidercard__arrow--right").addClass('c-slidercard__arrow--disable');
  }else{
      $(event.target).closest('.c-slidercard').find(".c-slidercard__arrow--right").removeClass('c-slidercard__arrow--disable');
  }
}

$('.c-slidercard .owl-carousel').owlCarousel({
      responsive : {
      0 : {
          items : 1.5,
          center: true,
      },
      480 : {
          items : 2,
      },
      768 : {
          items : 3,
      },
      1024 : {
          items : 4,
          slideBy: 4,
      }
    },
    nav:false,
    margin:30,
    autoHeight:true,
    onChanged: slidercardNumbering,
    afterInit: slidercardNumbering,
})

$(".c-slidercard__arrow--right").click(function(){
  $(this).closest('.c-slidercard').find(".owl-carousel").trigger('next.owl.carousel');
})
$(".c-slidercard__arrow--left").click(function(){
  $(this).closest('.c-slidercard').find(".owl-carousel").trigger('prev.owl.carousel');
})
