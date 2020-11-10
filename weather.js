const apiKey = 'd9da5c116c793405f65774bb82a48990';
const url = 'api.openweathermap.org/data/2.5/weather?lat=17.6936&lon=77.3210';

function getWeatherDataByName(){
  console.log('getWeatherDataByName');
  const cityName = document.getElementById('cityNameInput').value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},IN&appid=d9da5c116c793405f65774bb82a48990`
  fetchWeatherData(url, 'weatherByName');
}

function resetWeatherReportByName(){
  document.getElementById('weatherByName').innerHTML = '';
  document.getElementById('cityNameInput').value = '';
}

function getWeatherDataById(){
  console.log('getWeatherDataById');
  const cityId = document.getElementById('cityIdInput').value;
  let url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=d9da5c116c793405f65774bb82a48990`;
  fetchWeatherData(url, 'weatherById');
}

function resetWeatherReportById(){
  document.getElementById('weatherById').innerHTML = '';
  document.getElementById('cityIdInput').value = '';
}

function getWeatherDataByLatLong(){
  console.log('getWeatherDataByLatLong');
  const cityLatitude = document.getElementById('cityLatitude').value;
  const cityLongitude = document.getElementById('cityLongitude').value;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${cityLatitude}&lon=${cityLongitude}&appid=d9da5c116c793405f65774bb82a48990`
  fetchWeatherData(url, 'weatherReportByLatLong');
}

function resetWeatherReportByLatLong(){
  document.getElementById('weatherReportByLatLong').innerHTML = '';
  document.getElementById('cityLatitude').value = ''
  document.getElementById('cityLongitude').value = ''
}

function fetchWeatherData(url, generateReportBy){
  fetch(url)
  .then(res => res.json())
  .then(data => {
    generateWeatherReport(data, generateReportBy);
  })
  .catch(err => {
    showError(generateReportBy);
  });
}

function showError(generateReportBy){  
  const loc = document.getElementById(generateReportBy);
  loc.innerHTML = '';

  const errorP = document.createElement('p');
  const errorMessage = 'Error Occurred,please try again';
  errorP.innerHTML = errorMessage;
  errorP.classList.add('error'); 
  loc.appendChild(errorP);
}

function convertToCelsius(tempInKelvin){
  return (+tempInKelvin - 272.15).toFixed(1);
}


function generateWeatherReport(weatherData, generateReportBy){
  console.log('weather Data',weatherData, generateReportBy);

  const loc = document.getElementById(generateReportBy);
  loc.innerHTML = '';
  const cityName = document.createElement('p');
  cityName.innerHTML = `City: ${weatherData.name}`;
  
  const cityId = document.createElement('p');
  cityId.innerHTML = `City: ${weatherData.id}`;
  
  const temperature = document.createElement('p');
  temperature.innerHTML = `Temperature: ${convertToCelsius(weatherData.main.temp)}`;
  
  const humidity = document.createElement('p');
  humidity.innerHTML = `Humidity: ${weatherData.main.humidity}`;
  
  loc.appendChild(cityName);
  loc.appendChild(cityId);
  loc.appendChild(temperature);
  loc.appendChild(humidity);
}