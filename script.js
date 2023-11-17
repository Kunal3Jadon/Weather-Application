const cityInput = document.querySelector(".ct-inpt");
const forecast = document.querySelector(".days-forecast");
const weather = document.querySelector(".weather-data");
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

const getCityCoordinates = () => {
    forecast.style.display = "none";
    weather.style.display = "flex";
    weather.style.flexDirection = "column";
    const cityName = cityInput.value.trim();
    if (cityName === "") return;
    const API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    fetch(API_URL).then(response => response.json()).then(data => {
        if (!data.length) return alert(`No coordinates found for ${cityName}`);
        const { lat, lon, name } = data[0];
        getWeatherDetails(name, lat, lon);
    }).catch(() => {
        alert("An error occurred while fetching the coordinates!");
    });
}

searchButton.addEventListener("click", getCityCoordinates);