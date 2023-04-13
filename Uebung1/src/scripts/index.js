// JavaScript-Code, um den Text im <p>-Tag zu ändern

const name = document.getElementById("name");
const age = document.getElementById("age");
const studienort = document.getElementById("studienort");
const favbook = document.getElementById("favbook");
const favmusic = document.getElementById("favmusic");
const favmeal = document.getElementById("favmeal");
const hobbys = document.getElementById("hobbys");

const hiddenTextName = name.textContent;
const hiddenTextAge = age.textContent;
const hiddenTextOrt = studienort.textContent;
const hiddenTextFavbook = favbook.textContent;
const hiddenTextFavmusic = favmusic.textContent;
const hiddenTextFavmeal = favmeal.textContent;
const hiddenTextHobbys = hobbys.textContent;

// Images
const portrait = document.getElementById("portrait");
const nineteen = document.getElementById("nineteen");
const edm = document.getElementById("edm");
const hsfulda = document.getElementById("hsfulda");
const netflix = document.getElementById("netflix");
const gaming = document.getElementById("gaming");
const lasagne = document.getElementById("lasagne");

// Funktion zum Aktualisieren des Texts
function updateText(label) {
  let hiddenText = "";
  switch (label.id) {
    case "name": {
      hiddenText = hiddenTextName;
      break;
    }
    case "age": {
      hiddenText = hiddenTextAge;
      break;
    }
    case "studienort": {
      hiddenText = hiddenTextOrt;
      break;
    }
    case "favbook": {
      hiddenText = hiddenTextFavbook;
      break;
    }
    case "favmeal": {
      hiddenText = hiddenTextFavmeal;
      break;
    }
    case "favmusic": {
      hiddenText = hiddenTextFavmusic;
      break;
    }
    case "hobbys": {
      hiddenText = hiddenTextHobbys;
      break;
    }
  }
  let binaryText = "";
  binaryText = binaryText === "0" ? "1" : "0";
  label.textContent =
    binaryText +
    "" +
    hiddenText
      .replace(/\s+/g, "")
      .split("")
      .map(function (char) {
        return Math.floor(Math.random() * 2);
      })
      .join("");
}

// Starten des Intervalls für die Textaktualisierung
var intervalIDName = setInterval(() => updateText(name), 100); // Hier können Sie die Geschwindigkeit der Textänderung anpassen (in Millisekunden)
var intervalIDAge = setInterval(() => updateText(age), 100);
var intervalIDStudienort = setInterval(() => updateText(studienort), 100);
var intervalIDLieblingsbuch = setInterval(() => updateText(favbook), 100);
var intervalIDLieblingsmusik = setInterval(() => updateText(favmusic), 100);
var intervalIDLieblingsessen = setInterval(() => updateText(favmeal), 100);
var intervalIDHobbys = setInterval(() => updateText(hobbys), 100);
// Event Listener zum Stoppen des Intervalls beim Überfahren mit der Maus
name.addEventListener("mouseover", function () {
  clearInterval(intervalIDName);
  name.textContent = hiddenTextName;
});

// Event Listener zum Neustarten des Intervalls beim Entfernen des Mauszeigers
name.addEventListener("mouseout", function () {
  intervalIDName = setInterval(() => updateText(name), 100); // Hier können Sie die Geschwindigkeit der Textänderung anpassen (in Millisekunden)
});

age.addEventListener("mouseover", function () {
  clearInterval(intervalIDAge);
  age.textContent = hiddenTextAge;
  nineteen.style.display = "";
  portrait.style.display = "none";
});

// Event Listener zum Neustarten des Intervalls beim Entfernen des Mauszeigers
age.addEventListener("mouseout", function () {
  portrait.style.display = "";
  nineteen.style.display = "none";
  intervalIDAge = setInterval(() => updateText(age), 100); // Hier können Sie die Geschwindigkeit der Textänderung anpassen (in Millisekunden)
});

studienort.addEventListener("mouseover", function () {
  clearInterval(intervalIDStudienort);
  studienort.textContent = hiddenTextOrt;
  hsfulda.style.display = "";
  portrait.style.display = "none";
});

// Event Listener zum Neustarten des Intervalls beim Entfernen des Mauszeigers
studienort.addEventListener("mouseout", function () {
    portrait.style.display = "";
  hsfulda.style.display = "none";
  intervalIDStudienort = setInterval(() => updateText(studienort), 100); // Hier können Sie die Geschwindigkeit der Textänderung anpassen (in Millisekunden)
});

favbook.addEventListener("mouseover", function () {
  clearInterval(intervalIDLieblingsbuch);
  favbook.textContent = hiddenTextFavbook;
  netflix.style.display = "";
  portrait.style.display = "none";
});

// Event Listener zum Neustarten des Intervalls beim Entfernen des Mauszeigers
favbook.addEventListener("mouseout", function () {
    portrait.style.display = "";
  netflix.style.display = "none";
  intervalIDLieblingsbuch = setInterval(() => updateText(favbook), 100); // Hier können Sie die Geschwindigkeit der Textänderung anpassen (in Millisekunden)
});

favmusic.addEventListener("mouseover", function () {
  clearInterval(intervalIDLieblingsmusik);
  favmusic.textContent = hiddenTextFavmusic;
  edm.style.display = "";
  portrait.style.display = "none";
});

// Event Listener zum Neustarten des Intervalls beim Entfernen des Mauszeigers
favmusic.addEventListener("mouseout", function () {
    portrait.style.display = "";
  edm.style.display = "none";
  intervalIDLieblingsmusik = setInterval(() => updateText(favmusic), 100); // Hier können Sie die Geschwindigkeit der Textänderung anpassen (in Millisekunden)
});

favmeal.addEventListener("mouseover", function () {
  clearInterval(intervalIDLieblingsessen);
  favmeal.textContent = hiddenTextFavmeal;
  lasagne.style.display = "";
  portrait.style.display = "none";
});

// Event Listener zum Neustarten des Intervalls beim Entfernen des Mauszeigers
favmeal.addEventListener("mouseout", function () {
    portrait.style.display = "";
  lasagne.style.display = "none";
  intervalIDLieblingsessen = setInterval(() => updateText(favmeal), 100); // Hier können Sie die Geschwindigkeit der Textänderung anpassen (in Millisekunden)
});

hobbys.addEventListener("mouseover", function () {
  clearInterval(intervalIDHobbys);
  hobbys.textContent = hiddenTextHobbys;
  gaming.style.display = "";
  portrait.style.display = "none";
});

// Event Listener zum Neustarten des Intervalls beim Entfernen des Mauszeigers
hobbys.addEventListener("mouseout", function () {
    portrait.style.display = "";
  gaming.style.display = "none";
  intervalIDHobbys = setInterval(() => updateText(hobbys), 100); // Hier können Sie die Geschwindigkeit der Textänderung anpassen (in Millisekunden)
});