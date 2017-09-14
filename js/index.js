
window.onload = function (){

  const tl = new TimelineMax();
  const main = document.querySelector('main');
  const logo = document.querySelector('#club-logo');
  const tagline = document.querySelector('#club-tagline');
  const mascot = document.querySelector('#mascot');
  const x = window.innerWidth;
  const y = window.innerHeight;

  tl.set(main, {autoAlpha:1})
    .from(logo, 1.6, { opacity:0, scale: 0, rotation: 360, ease: SlowMo.ease.config(0.8, 0.5, false) })
    .to(logo, 0.6, { scale: 0, rotation: 360 }, '+=0.5')
    .from(tagline, 0.7, { ease: Bounce.easeOut, y: -y })
    .fromTo(mascot, 3, { x: -x }, { x: x, repeat: -1, yoyo: true }, '+=0.3');
}
