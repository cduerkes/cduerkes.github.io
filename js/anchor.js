$(document).ready(function() {

  $('a[rel="relativeanchor"]').click(function(){
      const anchor= $.attr(this, 'href');
      let offset;

      if (anchor === '#home-anchor') {
        scrollTo = 0;
      } else {
        scrollTo = $( $.attr(this, 'href') ).offset().top - 75;
      }

      $('html, body').animate({
          scrollTop: scrollTo
      }, 1000);

      $('.navigation__button').click();
      return false;
  }); 

});
