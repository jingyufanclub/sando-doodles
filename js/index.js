window.onload = function() {

// function getWeather() {
//   const req = new XMLHttpRequest()
//   req.addEventListener('load');
//   req.open('GET', 'http://localhost:8080/forecast/5dd2fdd2e6ffb91a72a32b4bdf6538e1/40.65805,-73.9608155')
//   req.send()
// }

const skycon = new Skycons({"color": "#fff"});

skycon.add(document.getElementById("weather"), Skycons.RAIN);
skycon.play();

}
