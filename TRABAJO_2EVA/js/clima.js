var clima = {};
fetch('./js/current_clima.json')
    .then((response) => response.json())
    .then((json) => fillContent(json));

function fillContent(clima){

    var imElement = document.getElementById("weather_img");
    imElement.src = clima.current.condition.icon;

    var temperaturaEl = document.getElementById("temperatura");
    temperaturaEl.textContent = clima.current.temp_c + " ºC";

    var viento = document.getElementById("viento");
    viento.textContent = clima.current.wind_kph;

    
    var hours = clima.forecast.forecastday[0].hour;
    
    hours.forEach(function(item) {
    
    })
}