document.addEventListener('DOMContentLoaded', () => {


    const cityInput = document.getElementById('city-input');
    console.log(cityInput);
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const weatherInfo = document.getElementById('weather-info');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const errorMessage = document.getElementById('error-message');

    const API_KEY = '5f56d525d1619d0a2cd2eac4ce55588e';

    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim();

        if (!city) return

        try {
            const weatherData = await fetchWeatherInfo(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error("Error fetching weather data:", error);
            showError();
        }
    })


    async function fetchWeatherInfo(city) {
        // write a api handlinging logic here

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data;
    }


    function displayWeatherInfo(displayData) {
        const { name, main, weather } = displayData;
        cityName.textContent = name;
        temperature.textContent = `Tempreature : ${main.temp} °C`
        description.textContent = `Description : ${weather[0].description}`
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }

    function showError() {
        weatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden');
    }
})