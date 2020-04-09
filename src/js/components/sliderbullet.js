  // SLIDER BULLET

(function ( $ ) {


var sliderbulletName = '.c-sliderbullet';
var sliderbullet = $(sliderbulletName);

sliderbullet.each(function() {

var sliderbullet = $(this);

var sliderbulletItemName = 'c-sliderbullet__item';
var sliderbulletItem = sliderbullet.find('.' + sliderbulletItemName);
var sliderbulletItemAttr = 'data-sliderbullet-active-item';
var sliderbulletItemActiveName = 'c-sliderbullet__item--active';

var sliderbulletTriggerName = 'c-sliderbullet__trigger';
var sliderbulletTrigger = sliderbullet.find('.' + sliderbulletTriggerName);
var sliderbulletTriggerAttr = 'data-sliderbullet-trigger';

var sliderbulletContentName = 'c-sliderbullet__item__content';
var sliderbulletContent = sliderbullet.find('.' + sliderbulletContentName);

var sliderbulletContentDesktopName = 'c-sliderbullet__contentdesktop';
var sliderbulletContentDesktop = sliderbullet.find('.' + sliderbulletContentDesktopName);


$.fn.itemActive = function() {
  var itemActiveNummer = this.attr(sliderbulletItemAttr);
  this.find('.' + sliderbulletItemName + '[data-sliderbullet-trigger='+ itemActiveNummer +']').addClass(sliderbulletItemActiveName);
  var content = this.find('.' + sliderbulletContentName + '[data-sliderbullet-content=' + itemActiveNummer +']').html();
  this.find('.' + sliderbulletContentDesktopName).append(content);
  if (window.matchMedia('(max-width: 768px)').matches) {
    this.find('.' + sliderbulletContentName + '[data-sliderbullet-content='+ itemActiveNummer +']').slideDown(300);
  }
}

$.fn.itemHide = function() {
  this.find('.' + sliderbulletItemName).removeClass(sliderbulletItemActiveName);
  this.find('.' + sliderbulletContentDesktopName).empty();
  if (window.matchMedia('(max-width: 768px)').matches) {
    this.find('.' + sliderbulletContentName).slideUp(300);
  }
}

sliderbulletItem.each(function(index) {
  var item = $(this);
  item.attr('data-sliderbullet-trigger',index);
  item.addClass(sliderbulletTriggerName);
  item.find('.' + sliderbulletContentName).attr('data-sliderbullet-content',index);
});

sliderbulletItem.click(function(){
  var item = $(this);
  var sliderbullet = item.closest(sliderbulletName);
  var itemNummer = item.attr(sliderbulletTriggerAttr);
  if(itemNummer == sliderbullet.attr('data-sliderbullet-active-item')){
    if (window.matchMedia('(max-width: 768px)').matches) {
      $(this).attr('data-sliderbullet-active-item', null);
      sliderbullet.itemHide();
      item.closest(sliderbulletName).attr('data-sliderbullet-active-item','');
    }
  }else{
    sliderbullet.attr('data-sliderbullet-active-item', itemNummer);
    sliderbullet.itemHide();
    sliderbullet.itemActive();
  }
});

if (window.matchMedia('(min-width: 768px)').matches) {
  sliderbullet.itemActive();
}

});

}( jQuery ));
