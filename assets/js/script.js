
// target current day, disable future days and days without dates
const giftImages = [
  'img/icon1.png',
  'img/icon2.png',
  'img/icon3.png',
  'img/icon4.png',
  'img/icon5.png',
];

var d = new Date();
var todaysDate = d.getDate();
var target = $("#calendar .week .day .date");

let currentImageIndex = 0;  // Brojač za redno biranje slika

target.each(function () {
  var day = $(this).html();
  var giftElement = $(this).parent();

  if (todaysDate == day) {
    $(this).addClass("today");
  }

  if (todaysDate < day) {
    giftElement.addClass("future");
    if ($(this).siblings(".surprise").html().trim() !== "") {
      giftElement.addClass("gift");
    }
  }

  if (todaysDate >= day) {
    giftElement.addClass("past");
    if ($(this).siblings(".surprise").html().trim() !== "") {
      giftElement.addClass("gift-open");

      // Postavljanje slike iz niza redom
      var currentImage = giftImages[currentImageIndex];
      giftElement.css('background-image', `url(${currentImage})`);

      // Povećavanje brojača za sledeću sliku
      currentImageIndex++;

      // Ako dođemo do kraja niza, vratimo brojač na početak
      if (currentImageIndex >= giftImages.length) {
        currentImageIndex = 0;
      }
    }
  }
});


// handle clicks on days

$(".day").click(function () {
  if ($(this).hasClass("future")) {
    return; // Ne radi ništa ako je budući dan
  }

  if ($(this).hasClass("past")) {
    var content = $(this).children(".surprise").html();

    // Provera da li postoji sadržaj pre nego što se otvoriti popup
    if (content.trim() !== "") {
      $("#modal").addClass("active");
      $("#modal .wrapper .content .box").html("");
      $("#modal .wrapper .content .box").html(content);
    } else {
      console.log("Nema dostupnog sadržaja za ovaj dan.");
    }
  }
});


// close modal
let isAnimating = false;  // Flag za praćenje da li je u toku animacija

// Funkcija za otvaranje i zatvaranje popupa sa animacijama
function togglePopup() {
  const modal = document.getElementById('modal');
  
  // Ako je animacija u toku, ne dozvoljavamo otvaranje ili zatvaranje
  if (isAnimating) return;

  isAnimating = true; // Pokrećemo animaciju

  // Ako modal nije aktivan, dodajemo "active" klasu za otvaranje
  if (!modal.classList.contains('active')) {
    modal.classList.add('active');
    
    // Dodajemo event listener koji će završiti animaciju otvaranja
    modal.addEventListener('animationend', function handleAnimationEnd() {
      modal.removeEventListener('animationend', handleAnimationEnd);
      isAnimating = false;  // Završava se animacija otvaranja
    });
  } else {
    // Ako je modal već aktivan, dodajemo "moveOut" animaciju za zatvaranje
    modal.classList.add('moveOut');
    
    // Dodajemo event listener koji će završiti animaciju zatvaranja
    modal.addEventListener('animationend', function handleAnimationEnd() {
      modal.removeEventListener('animationend', handleAnimationEnd);
      modal.classList.remove('active', 'moveOut'); // Uklanjamo klase nakon animacije
      isAnimating = false;  // Završava se animacija zatvaranja
    });
  }
}

// Klik na dugme za zatvaranje popupa
document.querySelector('.close-btn').addEventListener('click', function(e) {
  e.preventDefault();  // Sprečava default ponašanje linka
  togglePopup(); // Poziva funkciju za zatvaranje popupa
});

// Klik na pozadinu (klik na #modal element) za zatvaranje popupa
$("#modal").click(function (event) {
  if ($(event.target).closest('.wrapper').length === 0) {
    togglePopup(); // Poziva funkciju za zatvaranje
  }
});

// Zatvaranje popupa putem tastature (Escape taster)
$(document).keyup(function (e) {
  if (e.key === "Escape") {
    togglePopup(); // Poziva funkciju za zatvaranje
  }
});






// snow effect customizations

// const snow = ['❄', '❅', '❆'];
// const colors = ['#fff', '#fff', '#fff', '#fff', '#eee'];
// const flakes = 20;
// const container = document.querySelector('.snow');
// const containerWidth = container?.clientWidth;
// const snowflakes = [];
// for (let i = 0; i < flakes; i++) {
//   const flake = document.createElement('div');
//   flake.innerHTML = snow[Math.floor(Math.random() * snow.length)];
//   flake.classList.add('snowflake');
//   flake.style.position = 'absolute';
//   flake.style.left = `${Math.random() * containerWidth}px`;
//   flake.style.fontSize = `${Math.floor(Math.random() * 30) + 10}px`;
//   flake.style.color = colors[Math.floor(Math.random() * colors.length)];
//   flake.style.animationDelay = `${Math.random() * 12}s`;
//   container.appendChild(flake);
//   snowflakes.push(flake);
// }

// $(document).snowfall({
//   flakeCount: 100,
//   collection: ".collectonme",
//   maxSpeed: 10,
// });

