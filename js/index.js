window.onload = function (){

  const tl = new TimelineMax();
  const sando = document.getElementById('sando');

  tl.set(sando, {autoAlpha:1});
  tl.from(sando, 2.5, { ease: Elastic.easeOut.config(1.5, 0.3), y: -500 });
}
