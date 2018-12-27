$(document).ready(function() {

  $('.spacecraft').hover(function() { //mouse in
    $('.spacecraft').animate({ left: '10px', top: '20px' }, 400);
  }, function() { //mouse out
    $('.spacecraft').animate({ left: 0, top: 0 }, 400);
  });


  $('a[rel="relativeanchor"]').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top - 150
      }, 1000);

      $('.navigation__button').click();
      return false;
  }); 

});
