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
    viento.textContent = clima.current.wind_kph + " Kph";

    var precipitacioes = document.getElementById("precip");
    precipitacioes.textContent = clima.current.precip_mm + " %";

    var hours = clima.forecast.forecastday[0].hour;
    
    var temp00 = document.getElementById("temp_00");
    var temp08 = document.getElementById("temp_08");
    var temp12 = document.getElementById("temp_12");
    var temp18 = document.getElementById("temp_18");



    hours.forEach(function(item) {

        var timeStr = item.time.split(" ")[1];
        if (timeStr === "00:00" && temp00) {
            temp00.textContent = item.temp_c + " ºC";
        } else if (timeStr === "08:00" && temp08) {
            temp08.textContent = item.temp_c + " ºC";
        } else if (timeStr === "12:00" && temp12) {
            temp12.textContent = item.temp_c + " ºC";
        } else if (timeStr === "18:00" && temp18) {
            temp18.textContent = item.temp_c + " ºC";
        }

    })
}