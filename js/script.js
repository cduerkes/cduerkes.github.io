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

  function fade() {
    $('.fade').each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        var windowBottom = $(window).scrollTop() + $(window).innerHeight();
        
        /* If the object is completely visible in the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            if ($(this).css('opacity')==0) {$(this).fadeTo(200,1);}
        } else { //object goes out of view (scrolling up)
            if ($(this).css('opacity')==1) {$(this).fadeTo(200,0);}
        }
    });
  }
  fade(); //Fade in completely visible elements during page-load
  $(window).scroll(function() {fade();}); //Fade in elements during scroll

});
