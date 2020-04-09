
(function ( $ ) {

var expandName = '.c-expand';
var expand = $(expandName);

expand.each(function() {

var expand = $(this);

var expandItemName = 'c-expand__item';
var expandItem = expand.find('.' + expandItemName);
var expandItemAttr = 'data-expand-active-item';
var expandItemActiveName = 'c-expand__item--active';

var expandTriggerName = 'c-expand__trigger';
var expandTrigger = expand.find('.' + expandTriggerName);
var expandTriggerAttr = 'data-expand-trigger';

var expandContentName = 'c-expand__item__content';
var expandContent = expand.find('.' + expandContentName);

var expandContentDesktopName = 'c-expand__contentdesktop';
var expandContentDesktop = expand.find('.' + expandContentDesktopName);

$.fn.itemActive = function() {
  var itemActiveNummer = this.attr(expandItemAttr);
  this.find('.' + expandItemName + '[data-expand-trigger='+ itemActiveNummer +']').addClass(expandItemActiveName);
  this.find('.' + expandContentName + '[data-expand-content='+ itemActiveNummer +']').slideDown(500);
}

$.fn.itemHide = function() {
  this.find('.' + expandItemName).removeClass(expandItemActiveName);
  this.find('.' + expandContentName).slideUp(500);
}

expandItem.each(function(index) {
  var item = $(this);
  item.attr('data-expand-trigger',index);
  item.addClass(expandTriggerName);
  item.find('.' + expandContentName).attr('data-expand-content',index);
});

expandItem.click(function(){
  var item = $(this);
  var expand = item.closest(expandName);
  var itemNummer = item.attr(expandTriggerAttr);
  if(itemNummer == expand.attr('data-expand-active-item')){
    $(this).attr('data-expand-active-item', null);
    expand.itemHide();
    item.closest(expandName).attr('data-expand-active-item','');
  }else{
    expand.attr('data-expand-active-item', itemNummer);
    expand.itemHide();
    expand.itemActive();
  }
});

expand.itemActive();

});

}( jQuery ));
