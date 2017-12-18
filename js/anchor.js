$(document).ready(function() {

  $('a[rel="relativeanchor"]').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top - 150
      }, 1000);
      return false;
  }); 

});
