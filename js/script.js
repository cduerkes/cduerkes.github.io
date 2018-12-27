$(document).ready(function() {

  $('a[rel="relativeanchor"]').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top - 150
      }, 1000);

      $('.navigation__button').click();
      return false;
  }); 

  var controller = new ScrollMagic.Controller();

  var skillTween = new TweenMax.to('.section__skill--HTML5', 1, {
      color: 'red',
      scale: 1.1
  });

  var scene = new ScrollMagic.Scene({
  triggerElement: '.section__skill' // point of execution
})
  .triggerHook(".5")
  .setTween(skillTween)
  .addIndicators()
  .addTo(controller);

});
