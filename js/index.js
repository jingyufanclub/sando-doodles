window.onload = function (){

  const tl = new TimelineMax();
  const sando = document.getElementById('sando');

  const title = document.getElementById('title');

  tl.set(sando, {autoAlpha:1});
  tl.from(sando, 2, { ease: Elastic.easeOut.config(1.5, 0.3), x: -1000 });
}
