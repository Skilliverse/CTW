// Function to fetch weather data from OpenWeatherMap API
export async function getWeatherData(location) {
  const apiKey = '89926524bdf5a030c595803b5fc60123'; // Replace this with your API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Unable to fetch weather data.');
  }
}
