const localWrapper = document.querySelector(".local-wrapper");
const localTemperature = document.querySelector("#local-temperature");
const localName = document.querySelector("#local-name");
const localFeelsLike = document.querySelector("#local-feels-like");
const localConditions = document.querySelector("#local-conditions");
const localHumidity = document.querySelector("#local-humidity");

const sevenDayWrapper = document.querySelector(".seven-day-wrapper");

const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");

function getLocalWeather() {
  let location = searchBox.value;
  const APIURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=CF5EAZAP76ZF3TS6QAJNZ88FX`;
  console.log(APIURL);
  fetch(APIURL)
    .then((response) => response.json())
    .then((weather) => {
      // User Interface:
      // Design a user interface that allows users to enter a location (city, state, or country) to retrieve the weather forecast.
      // Display the current weather conditions, including temperature,  and weather description.

      // console.log(weather.currentConditions);
      localName.innerHTML = weather.resolvedAddress;
      localTemperature.innerHTML = `${weather.currentConditions.temp}°`;
      localConditions.innerHTML = weather.currentConditions.conditions;
      localFeelsLike.innerHTML = `${weather.currentConditions.feelslike}°`;
      localHumidity.innerHTML = weather.currentConditions.humidity;

      // Display a 7-day forecast with the date, weather icon, high and low
      // temperature for each day.
      var count = 0;
      weather.days.some((day, index) => {
        console.log(index)

        count++;

        if (count < 8) {
          var dayWrapper = document.createElement("div");
          dayWrapper.className = "day-wrapper";

          var sevenDayDate = document.createElement("p");
          sevenDayDate.innerHTML = day.datetime;
          dayWrapper.appendChild(sevenDayDate);

          var sevenDayIcon = document.createElement("p");
          sevenDayIcon.innerHTML = day.icon;
          dayWrapper.appendChild(sevenDayIcon);

          var sevenDayTemp = document.createElement("div");
          var sevenDayLow = document.createElement("p");
          var sevenDayHigh = document.createElement("p");

          sevenDayLow.innerHTML = day.tempmin;
          sevenDayHigh.innerHTML = day.tempmax;
          sevenDayTemp.appendChild(sevenDayLow);
          sevenDayTemp.appendChild(sevenDayHigh);
          dayWrapper.appendChild(sevenDayTemp);

          var sevenDaysFeelsLike = document.createElement("div");
          var sevenDayFeelsLikeMin = document.createElement("p");
          var sevenDayFeelsLikeMax = document.createElement("p");

          sevenDayFeelsLikeMin.innerHTML = day.feelslikemin;
          sevenDayFeelsLikeMax.innerHTML = day.feelslikemax;
          sevenDaysFeelsLike.appendChild(sevenDayFeelsLikeMin);
          sevenDaysFeelsLike.appendChild(sevenDayFeelsLikeMax);
          dayWrapper.appendChild(sevenDaysFeelsLike);

          var sevenDayMoonPhase = document.createElement("p");
          sevenDayMoonPhase.innerHTML = day.moonphase;
          dayWrapper.appendChild(sevenDayMoonPhase);

          var sevenDayConditions = document.createElement("p");
          sevenDayConditions.innerHTML = day.conditions;
          dayWrapper.appendChild(sevenDayConditions);

          var sevenDayDescription = document.createElement("p");
          sevenDayDescription.innerHTML = day.description;
          dayWrapper.appendChild(sevenDayDescription);

          sevenDayWrapper.appendChild(dayWrapper);

          return false;
        }
      });
    });
}

searchButton.addEventListener("click", getLocalWeather);
