document.addEventListener("DOMContentLoaded", function () {
  var langDropdown = document.querySelector(".lang-dropdown");
  var langLink = document.getElementById("lang-link");
  var flagImg = document.getElementById("flag-img");

  // Funkcija za preusmjeravanje korisnika na stranicu odabranog jezika
  function redirectToLanguage(selectedLang) {
    let pathArray = document.URL.split("/");
    let secondLevelLocation = pathArray[5] || ""; // Ako nema 4. nivoa, postavlja se na prazan string
    
    // Formiraj URL na osnovu odabranog jezika
    if (selectedLang === "sw") {
      window.location.href = `../${secondLevelLocation}`;
    } else if (selectedLang === "en") {
      window.location.href = `./${secondLevelLocation}`;
    } else {
      console.warn(`Nepoznat jezik: ${selectedLang}`);
    }
  }

 // Funkcija za postavljanje zastave jezika na temelju lokalno pohranjenih podataka
 function setLanguageFromLocalStorage() {
  var selectedLang = localStorage.getItem("selectedLang");
  if (!selectedLang) return; // Ako nema jezika u localStorage, izlazimo

  var selectedOption = langDropdown.querySelector(`[data-lang="${selectedLang}"]`);
  if (!selectedOption) {
    console.warn(`Nije pronađen jezik za: ${selectedLang}`);
    return;
  }

  var selectedImage = selectedOption.getAttribute("data-image");
  flagImg.setAttribute("src", selectedImage);
}

// Provera lokalno pohranjenih podataka i postavljanje zastave na temelju toga
if (langDropdown && localStorage.getItem("selectedLang")) {
  setLanguageFromLocalStorage();
}

// Dodavanje "click" događaja na zastavu/link
langLink.addEventListener("click", function (event) {
  event.preventDefault();
  langDropdown.style.display =
    langDropdown.style.display === "block" ? "none" : "block";
});

// Dodavanje "click" događaja na opcije padajućeg menija
var langOptions = langDropdown.querySelectorAll("a[data-lang]");
langOptions.forEach(function (option) {
  option.addEventListener("click", function (event) {
    event.preventDefault();
    var selectedLang = this.getAttribute("data-lang");
    var selectedImage = this.getAttribute("data-image");

    // Ažuriranje zastave i preusmjeravanje korisnika na odabrani jezik
    flagImg.setAttribute("src", selectedImage);
    redirectToLanguage(selectedLang);

    // Spremanje odabranog jezika u localStorage
    localStorage.setItem("selectedLang", selectedLang);

    // Sakrij padajući meni nakon što je odabir završen
    langDropdown.style.display = "none";
  });
});
});
