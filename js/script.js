$(document).ready(function() {

  var controller = new ScrollMagic.Controller();

  $(".section__skill").each(function(i, val) {
    var skillTween = new TweenMax.to(this, 2, {
        opacity: .7,
        scale: .90
    });

    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      duration: 250
    })
    .triggerHook(".5")
    .setPin(`.pin-${i}`)
    .setTween(skillTween)
//    .addIndicators()
    .addTo(controller);
  });
});
