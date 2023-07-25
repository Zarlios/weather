const localWrapper = document.querySelector(".local-wrapper");
const localDataWrapper = document.querySelector(".local-data-wrapper")
const localName = document.querySelector("#local-name");

const sevenDayWrapper = document.querySelector(".seven-day-wrapper");

const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");

function getLocalWeather() {
  sevenDayWrapper.innerHTML="";
  let location = searchBox.value;
  const APIURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=CF5EAZAP76ZF3TS6QAJNZ88FX`;
  console.log(APIURL);
  fetch(APIURL)
    .then((response) => response.json())
    .then((weather) => {
      localDataWrapper.innerHTML="";
      // User Interface:
      // Design a user interface that allows users to enter a location (city, state, or country) to retrieve the weather forecast.
      // Display the current weather conditions, including temperature,  and weather description.

      // console.log(weather.currentConditions);
      localName.innerHTML = weather.resolvedAddress;
      
      // Temperature
      var localTemperatureLabel = document.createElement("div");
      localTemperatureLabel.className = "label";
      var localTemperatureElement = document.createElement("p");
      localTemperatureElement.className="local-temperature";

      localDataWrapper.appendChild(localTemperatureLabel);
      localDataWrapper.appendChild(localTemperatureElement);

      localTemperatureLabel.innerHTML = "Temperature"
      localTemperatureElement.innerHTML = `${weather.currentConditions.temp}°`;
      
      // Sub Data Wrapper
      var localSubDataWrapper = document.createElement("div");
      localSubDataWrapper.className = "sub-data-wrapper"

      localDataWrapper.appendChild(localSubDataWrapper);

      // Feels like
      var localFeelsLikeLabel = document.createElement("div");
      localFeelsLikeLabel.className = "label";
      var localFeelsLikeElement = document.createElement("div");
      localFeelsLikeElement.className = "local-feels-like";

      localSubDataWrapper.appendChild(localFeelsLikeLabel);
      localSubDataWrapper.appendChild(localFeelsLikeElement);

      localFeelsLikeLabel.innerHTML = "Feels Like"
      localFeelsLikeElement.innerHTML = `${weather.currentConditions.feelslike}°`;

      // Conditions
      var localConditionsLabel = document.createElement("div");
      localConditionsLabel.className="label";
      var localConditionsElement = document.createElement("div");
      localConditionsElement.className = "local-conditions";

      localSubDataWrapper.appendChild(localConditionsLabel);
      localSubDataWrapper.appendChild(localConditionsElement);

      localConditionsLabel.innerHTML = "Conditions"
      localConditionsElement.innerHTML = weather.currentConditions.conditions;

      // Humidity
      
      var localHumidityLabel = document.createElement("div");
      localHumidityLabel.className = "label";
      var localHumidityElement = document.createElement("div");
      localHumidityElement.className = "local-humidity";

      localSubDataWrapper.appendChild(localHumidityLabel);
      localSubDataWrapper.appendChild(localHumidityElement);

      localHumidityLabel.innerHTML = "Humidity"
      localHumidityElement.innerHTML = weather.currentConditions.humidity;
      

      // Display a 7-day forecast with the date, weather icon, high and low
      // temperature for each day.
      var count = 0;
      weather.days.some((day, index) => {
        console.log(index)

        count++;

        if (count < 8) {
          var dayWrapper = document.createElement("div");
          dayWrapper.className = "day-wrapper";

          // Date
          var sevenDayDate = document.createElement("p");
          sevenDayDate.innerHTML = day.datetime;
          dayWrapper.appendChild(sevenDayDate);

          // Icon
          var sevenDayIcon = document.createElement("p");
          sevenDayIcon.innerHTML = day.icon;
          dayWrapper.appendChild(sevenDayIcon);

          // Temp
          // Temp Label
          var tempLabel = document.createElement("p");
          tempLabel.className="label";
          tempLabel.innerHTML="Temperature";
          dayWrapper.appendChild(tempLabel);

          // Container
          var sevenDayTemp = document.createElement("div");
          sevenDayTemp.className="temp";

          // High Low
          var sevenDayLow = document.createElement("p");
          sevenDayLow.innerHTML = day.tempmin;
          var sevenDayHigh = document.createElement("p");
          sevenDayHigh.innerHTML = day.tempmax;
          sevenDayTemp.appendChild(sevenDayLow);
          sevenDayTemp.appendChild(sevenDayHigh);

          dayWrapper.appendChild(sevenDayTemp);

          // Feels Like
          // Feels Like Label
          var feelsLikeLabel = document.createElement("p");
          feelsLikeLabel.className="label";
          feelsLikeLabel.innerHTML="Feels Like";
          dayWrapper.appendChild(feelsLikeLabel);

          // Container
          var sevenDaysFeelsLike = document.createElement("div");
          sevenDaysFeelsLike.className="feels-like";

          // High Low
          var sevenDayFeelsLikeMin = document.createElement("p");
          sevenDayFeelsLikeMin.innerHTML = day.feelslikemin;
          var sevenDayFeelsLikeMax = document.createElement("p");
          sevenDayFeelsLikeMax.innerHTML = day.feelslikemax;

          sevenDaysFeelsLike.appendChild(sevenDayFeelsLikeMin);
          sevenDaysFeelsLike.appendChild(sevenDayFeelsLikeMax);
          dayWrapper.appendChild(sevenDaysFeelsLike);

          // Moon Phase
          // Moon Phase Label
          var moonPhaseLabel = document.createElement("p");
          moonPhaseLabel.className="label";
          moonPhaseLabel.innerHTML="Moon Phase";
          dayWrapper.appendChild(moonPhaseLabel);

          // Container
          var sevenDayMoonPhase = document.createElement("p");
          sevenDayMoonPhase.innerHTML = day.moonphase;
          dayWrapper.appendChild(sevenDayMoonPhase);

          // Conditions
          // Conditions Label
          var conditionsLabel = document.createElement("p");
          conditionsLabel.className="label";
          conditionsLabel.innerHTML="Conditions";
          dayWrapper.appendChild(conditionsLabel);

          //Container
          var sevenDayConditions = document.createElement("p");
          sevenDayConditions.innerHTML = day.conditions;
          dayWrapper.appendChild(sevenDayConditions);

          // Description
          // Description Label
          var descriptionsLabel = document.createElement("p");
          descriptionsLabel.className="label";
          descriptionsLabel.innerHTML="Description";
          dayWrapper.appendChild(descriptionsLabel);

          // Container
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
