"use strict";

console.log('Hello World from main.js!');
var tl = gsap.timeline({
  repeat: -1,
  onRepeat: function onRepeat() {
    if (tl.timeScale() < 10) tl.timeScale(tl.timeScale() * 1.2);
  }
});
tl.to('.square', {
  duration: 1.5,
  ease: 'power1.inOut',
  left: '40%',
  top: '58%',
  rotation: 90
});
tl.to('.square', {
  duration: 1.5,
  ease: 'power1.inOut',
  left: '40%',
  top: '10%',
  rotation: 180
});
tl.to('.square', {
  duration: 1.5,
  ease: 'power1.inOut',
  left: '10%',
  top: '58%',
  rotation: 270
});
tl.to('.square', {
  duration: 1.5,
  ease: 'power1.inOut',
  left: '10%',
  top: '10%',
  rotation: 180
});
//# sourceMappingURL=main.js.map
