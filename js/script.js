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
});
