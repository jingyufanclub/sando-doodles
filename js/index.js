window.onload = function (){

  const apiKey = '5dd2fdd2e6ffb91a72a32b4bdf6538e1';
  const lat = 40.65805;
  const long = -73.9608155;
  const url = `http://localhost:8080/forecast/${apiKey}/${lat},${long}`

  function getWeather(){
    let req = new XMLHttpRequest();
    req.open("GET", `http://localhost:8080/forecast/${apiKey}/${lat},${long}`)
    req.send(null)
    req.onreadystatechange = function (){
      if ( (req.readyState == 4) && (req.status == 200) ){
        let forecast = JSON.parse(req.responseText);
        let skycon = new Skycons({'color': '#fff'});
        skycon.add(document.getElementById('weather'), forecast.currently.icon);
        skycon.play();
      }
    }
  }

  getWeather();



}
