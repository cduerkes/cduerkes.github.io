$(document).ready(function() {
  $('.plane').hover(function() { //mouse in
    $('.plane').animate({ right: '10px', top: '20px' }, 400);
  }, function() { //mouse out
    $('.plane').animate({ right: 0, top: 0 }, 400);
  });

  $('.satellite').hover(function() { //mouse in
    $('.satellite').animate({ left: '10px', top: '20px' }, 400);
  }, function() { //mouse out
    $('.satellite').animate({ left: 0, top: 0 }, 400);
  });

  $(".panel-nav a#problem-solving").click(function(){
    panels = ['.code-quality-panel', '.collaboration-panel', '.code-samples-panel']
    $.each(panels, function(index, value) {
      if ($(value).is(':visible')) {
        $(value).hide('slide',{direction:'right'}, 100)};
    }); 

    $('.problem-solving-panel').show('slide',{direction:'left'}, 200);
  });
  $(".panel-nav a#code-quality").click(function(){
    panels = ['.problem-solving-panel', '.collaboration-panel', '.code-samples-panel']
    $.each(panels, function(index, value) {
      if ($(value).is(':visible')) {
        $(value).hide('slide',{direction:'right'}, 200)};
    }); 

    $('.code-quality-panel').show('slide',{direction:'left'}, 100);
  });
  $(".panel-nav a#collaboration").click(function(){
    panels = ['.code-quality-panel', '.problem-solving-panel', '.code-samples-panel']
    $.each(panels, function(index, value) {
      if ($(value).is(':visible')) {
        $(value).hide('slide',{direction:'right'}, 200)};
    }); 

    $('.collaboration-panel').show('slide',{direction:'left'}, 100);
  });
  $(".panel-nav a#code-samples").click(function(){
    panels = ['.code-quality-panel', '.collaboration-panel', '.problem-solving-panel']
    $.each(panels, function(index, value) {
      if ($(value).is(':visible')) {
        $(value).hide('slide',{direction:'right'}, 200)};
    }); 

    $('.code-samples-panel').show('slide',{direction:'left'}, 100);
  });

    // This is a shortcut to bind both mouseOver and mouseOut
    $('div.slideOutTab').hover(function() {
        // Animate out when hovered, stopping all previous animations
        $(this)
            .stop(true, false)
            .animate({
                left: 0
            }, 400);
    }, function() {
        // Animate back in when not hovered, stopping all previous animations
        $(this)
            .stop(true, false)
            .animate({
                left: -107
            }, 400);
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

});
