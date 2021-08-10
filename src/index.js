import "./styles.css";

var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");
var chkBtn = document.querySelector("#chk-btn");
let url = "https://api.funtranslations.com/translate/minion.json";

function errorHandler(error) {
  console.log("Error occured:", error);
  alert("Something went wrong. Please try again later");
}

function createServerlink(text) {
  return url + "?text=" + text;
}

function translateText() {
  var text = inputText.value;
  console.log(text);
  fetch(createServerlink(text))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      console.log(translatedText);
      outputText.innerText = translatedText;
    })
    .catch(errorHandler);
}

chkBtn.addEventListener("click", translateText);
