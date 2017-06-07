window.onload = function (){

  const tl = new TimelineMax();
  const main = document.querySelector('main');
  const sando = document.getElementById('sando');
  const title = document.getElementById('title');
  const pickle = document.getElementById('pickle');
  const x = window.innerWidth;
  const y = window.innerHeight;

  tl.set(main, {autoAlpha:1})
    .from(sando, 2, { opacity:0, scale: 0, rotation: 360, ease: SlowMo.ease.config(0.8, 0.5, false) })
    .to(sando, 0.6, { scale: 0, rotation: 360 }, '+=0.4')
    .from(title, 0.7, { ease: Bounce.easeOut, top: -y })
    .fromTo(pickle, 3, { right: -x }, { right: x, repeat: -1, yoyo: true }, '+=0.5');
}
