// Import the getWeatherData function from weather.js
import { getWeatherData } from './weather.js';

// Function to display weather information
function displayWeather(data) {
  const weatherInfo = document.getElementById('weather-info');
  weatherInfo.innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Description: ${data.weather[0].description}</p>
  `;
}

// Fetch weather data for New York and display it
getWeatherData('New York').then(displayWeather).catch(console.error);
