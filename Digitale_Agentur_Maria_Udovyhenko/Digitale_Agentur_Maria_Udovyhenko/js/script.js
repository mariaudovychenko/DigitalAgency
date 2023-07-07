// const land = document.getElementById("land");

// // Platzhalteroption erstellen
// const placeholderOption = document.createElement("option");
// placeholderOption.disabled = true;
// placeholderOption.selected = true;
// placeholderOption.text = "Land wählen...";
// land.add(placeholderOption);

// fetch("https://restcountries.com/v3.1/region/europe/")
//   .then((response) => response.json())
//   .then((data) => {
//     // Extract country names from the API response
//     const countries = data.map((country) => country.name.common);

//     // COptionen für jedes Land erstellen
//     countries.forEach((country) => {
//       const option = document.createElement("option");
//       option.text = country;
//       land.add(option);
//     });
//   })
//   .catch((error) => {
//     console.log("Error fetching countries:", error);
//   });

const land = document.getElementById("land");

// Platzhalteroption erstellen
const placeholderOption = document.createElement("option");
placeholderOption.disabled = true;
placeholderOption.selected = true;
placeholderOption.text = "Choose country...";
land.add(placeholderOption);

// Ereignislistener für Farbänderungen
land.addEventListener("change", function () {
  this.style.color = "#333";
});

fetch("https://restcountries.com/v3.1/region/europe/")
  .then((response) => response.json())
  .then((data) => {
    // Ländernamen und Übersetzung (deutsch) aus der API response exstrahieren
    const countries = data.map((country) => ({
      name: country.name.common,
      translation: country.translations.deu.common,
    }));

    // Länder nach deutscher Übersetzung alphabetisch sortieren
    countries.sort((a, b) =>
      (a.translation || a.name).localeCompare(b.translation || b.name, "de")
    );

    // COptionen für jedes Land erstellen
    countries.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.name;
      option.text = country.translation || country.name;
      land.add(option);
    });
  })
  .catch((error) => {
    console.log("Error fetching countries:", error);
  });

//Formular validieren
function validateForm() {
  const emailInput = document.getElementById("email");
  const landInput = document.getElementById("land");
  const nachrichtInput = document.getElementById("nachricht");
  const datenschutzCheckbox = document.getElementById("datenschutz");

  let isValid = true;

  if (emailInput.value === "") {
    alert("Bitte gib deine E-Mail-Adresse ein.");
    isValid = false;
  }

  if (landInput.value === "") {
    alert("Bitte wähle ein Land aus.");
    isValid = false;
  }

  if (nachrichtInput.value === "") {
    alert("Bitte gib eine Nachricht ein.");
    isValid = false;
  }

  if (!datenschutzCheckbox.checked) {
    alert("Bitte stimme den Datenschutzbestimmungen zu.");
    isValid = false;
  }

  return isValid;
}
