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

});
