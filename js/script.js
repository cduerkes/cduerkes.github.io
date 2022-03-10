$(document).ready(function() {

  var controller = new ScrollMagic.Controller();

  $(".section__skill").each(function(i, val) {
    var skillTween1 = new TweenMax.to(this, 8, {
        opacity: 1, //.7
        scale: .90,
        ease: Cubic.easeOut
    });

    var skillTween2 = new TweenMax.to(this, .5, {
        opacity: 1,
        scale: 1.1,
        ease: Cubic.easeOut
    });

    var scene1 = new ScrollMagic.Scene({
      triggerElement: this,
      duration: 300
    })
    .triggerHook(".2")
    .setTween(skillTween1)
//    .addIndicators()
    .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 'onEnter',
      offset: 300,
      duration: 300
    })
    .setTween(skillTween2)
//    .addIndicators()
    .addTo(controller);
  });

  var bg_tween0 = TweenMax.to('.section, footer', 1, {
    backgroundColor: 'rgb(0, 3, 111)', //about
    ease: Linear.easeNone
  });

  var bg_tween1 = TweenMax.to('.section, footer', 1, {
    backgroundColor: 'rgb(253, 200, 8)', //experience
    ease: Linear.easeNone
  });

  var bg_tween2 = TweenMax.to('.section, footer', 1, {
    backgroundColor: 'rgb(132, 151, 26)', //contact
    ease: Linear.easeNone
  });

  var bg_scene0 = new ScrollMagic.Scene({
    triggerElement: '.section--3', //about
    triggerHook: 'onEnter',
    duration: 300
  })
  .setTween(bg_tween0);

  var bg_scene1 = new ScrollMagic.Scene({
    triggerElement: '.section--4', //experience
    duration: 300
  })
  .triggerHook("1")
  .setTween(bg_tween1);

  var bg_scene2 = new ScrollMagic.Scene({
    triggerElement: 'footer',
    duration: 300
  })
  .triggerHook("1")
  .setTween(bg_tween2);

  controller.addScene([
    bg_scene0,
    bg_scene1,
    bg_scene2
  ]);

});
