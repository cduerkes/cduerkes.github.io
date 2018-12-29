$(document).ready(function() {

  $('a[rel="relativeanchor"]').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top - 175
      }, 1000);

      $('.navigation__button').click();
      return false;
  }); 

});
