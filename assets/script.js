const searchboxEl = document.querySelector("#search-box");
const searchButtonEl = document.querySelector("#search-button");

function getWeather() {
  let location = document.querySelector("#search-box").value;
  const APIURL =
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=CF5EAZAP76ZF3TS6QAJNZ88FX`;

  fetch(APIURL)
    .then((response) => response.json())
    .then((data) => {
      let characterName = document.createElement("p");
      characterName.textContent = data.name;

      nameField.appendChild(characterName);

      namebuttonEl.style.visibility = "hidden";
    });
}
