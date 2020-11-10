
const resumeBtn = document.getElementById("resumeBtn");
const showWeatherBtn = document.getElementById("showWeatherBtn");
const resumeSection = document.getElementById("resumeSection");
const weatherSection = document.getElementById("weatherSection");

const getWeatherBtn = document.getElementById('getWeatherBtn');

document.addEventListener("load", function () {});

document.addEventListener("DOMContentLoaded", (event) => {
  resumeSection.classList = "hideSection";
  showWeatherBtn.classList.add('activeTabStyle');
});

resumeBtn.addEventListener("click", showResume);

function showResume() {
  resumeSection.classList = "showSection";
  resumeBtn.classList.add('activeTabStyle');

  weatherSection.classList = "hideSection";
  showWeatherBtn.classList.remove('activeTabStyle');
}

showWeatherBtn.addEventListener("click", showWeather);

function showWeather() {
  resumeSection.classList = "hideSection";
  resumeBtn.classList.remove('activeTabStyle');
  weatherSection.classList = "showWSection";
  showWeatherBtn.classList.add('activeTabStyle'); 
}
