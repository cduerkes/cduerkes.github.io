$(document).ready(function() {
  $('.plane').hover(function() { //mouse in
    $('.plane').animate({ right: '10px', top: '20px' }, 400);
  }, function() { //mouse out
    $('.plane').animate({ right: 0, top: 0 }, 400);
  });

  $('.spacecraft, .spacecraft2').hover(function() { //mouse in
    $('.spacecraft, .spacecraft2').animate({ left: '10px', top: '20px' }, 400);
  }, function() { //mouse out
    $('.spacecraft, .spacecraft2').animate({ left: 0, top: 0 }, 400);
  });

    // This is a shortcut to bind both mouseOver and mouseOut
    $('div.slideOutTab').hover(function() {
        // Animate out when hovered, stopping all previous animations
        $(this)
            .stop(true, false)
            .animate({
                left: 0
            }, 300);
    }, function() {
        // Animate back in when not hovered, stopping all previous animations
        $(this)
            .stop(true, false)
            .animate({
                left: -107
            }, 300);
    });
  (function($) {

      /**
       * Copyright 2012, Digital Fusion
       * Licensed under the MIT license.
       * http://teamdf.com/jquery-plugins/license/
       *
       * @author Sam Sehnert
       * @desc A small plugin that checks whether elements are within
       *     the user visible viewport of a web browser.
       *     only accounts for vertical position, not horizontal.
       */

      $.fn.visible = function(partial) {

          var $t = $(this),
              $w = $(window),
              viewTop = $w.scrollTop(),
              viewBottom = viewTop + $w.height(),
              _top = $t.offset().top,
              _bottom = _top + $t.height(),
              compareTop = partial === true ? _bottom : _top,
              compareBottom = partial === true ? _top : _bottom;

          return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

      };

  })(jQuery);

  var win = $(window);

  var allMods = $(".slide-box");

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible");
    }
  });

  win.scroll(function(event) {

      allMods.each(function(i, el) {
          var el = $(el);
          if (el.visible(true)) {
              el.addClass("come-in");
          }
      });

  });

  $('a[rel="relativeanchor"]').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top - 150
      }, 500);
      return false;
  }); 

});
