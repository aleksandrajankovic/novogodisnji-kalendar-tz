const giftImages = [
  'img/icon1.png',
  'img/icon2.png',
  'img/icon3.png',
  'img/icon4.png',
  'img/icon6.png',
  'img/icon7.png',
  'img/icon8.png',
  'img/icon9.png',
  'img/icon10.png',
  'img/icon11.png',
  'img/icon12.png',
  'img/icon13.png',
  'img/icon14.png',
  'img/icon15.png',
  'img/icon16.png',
  'img/icon17.png',
];


const promotions = {
  1: {
    title: "Win&Go cashback 100%!",
    subtitle: "Igrajući Win&Go brojeve ne mozeš izgubiti!",
    image: "./assets/images/header/image1.jpg",
    description: [
      "Promocija je aktivna za Win&Go brojeve.",
      "100% cashback se uplaćuje na ukupni gubitak na Win&Go tiketima koji ispunjavaju pravila promocije",
      "Ukupni gubitak se obračunava po sistemu: Razlika ukupnog uloga i ukupnog dobitka na svim odigranim tiketima koji učestvuju u promociji",
      "Maksimalan iznos bonusa koji jedan igrač može da ostvari je 10€.",
      "Cashback se uplaćuje sjutradan do 15h"
    ]
  },
  2: {
    title: "Sport cashback!",
    subtitle: "Odigraj tiket i ukoliko je nedobitan, dobijaš 50% cashback na bonus račun!",
    image: "./assets/images/header/image2.jpg",
    description: [
      "U promociji učestvuju svi tiketi koji su uplaćeni i rezultovani u toku trajanja iste.",
      "Promocija važi za hronoliški prvi tiket u periodu trajanja.",
      "Minimalna uplata na tiketu mora biti 2€.",
      "Minimalna kvota po događaju 1.30.",
      "Ukoliko je tiket rezultovan kao nedobitan, Meridian te časti povraćajem uplate na bonus račun.",
      "Maksimalni iznos bonusa je 20€.",
    ]
  },
  3: {
    title: "Kartica donosi dodatnih 20% bonusa!",
    subtitle: "Uplati depozit putem kartice i čeka te 40% bonusa na prvu uplatu!",
    image: "./assets/images/header/image3.jpg",
    description: [
      "Svake srijede, na prvu uplatu putem kartice u iznosu od 10€, ostvarujete pravo na bonus od 20%. ",
      "Bonus će biti uplaćen sljedećeg dana do 11h.",
      "Potrebno je iskoristiti cjelokupan iznos prvog depozita do kraja dana (23:59:59h) kako bi bonus bio uplaćen.",
      "Maksimalni iznos sportskog bonusa na dnevnom nivou iznosi 10€.",
     
    ]
  },
  4: {
    title: "Aviator kiša freebet-ova!",
    subtitle: "Uplati depozit u minimalnom iznosu od 5€, izvrti ga na kazinu kako bi dobio freebet-ove na Aviatoru!",
    image: "./assets/images/header/image4.jpg",
    description: [
      "Uplati depozit u minimalnom iznosu od 5€, izvrti ga na kazinu kako bi dobio freebet-ove na Aviatoru! ",
      "Svaki dodijeljeni Freebet je vrijedan 0.10€.",
      "Dobitak se može isplatiti na keš račun igrača u bilo kom trenutku nakon što koeficijent dostigne minimalni iznos od 1.95.",
      "Freebet-ovi se uplacuju sjutradan do 12h.",
     
    ]
  },
  5: {
    title: "Igra dana GG&3+",
    subtitle: "Petak je dan za golove! Samo danas odigraj najviše tiketa koji sadrže igru GG&3+ i kvalifikuj se za bonus.",
    image: "./assets/images/header/image5.jpg",
    description: [
      "20 igrača koji budu imali najveći broj tiketa koji sadrže igru GG&3+ ( minimum 1 događaj sa ovom igrom po tiketu) dobijaju po 20€ bonusa",
      "Minimalna uplata 1€.",
      "Ne važi za tikete odigrane sa bonus novcem.",
      "Ne važi za tikete koji su obrađeni turbo kešom.",
      "Maximalna isplata na tiketu je 100€",
      "Proglašenje dobitnika bonusa i uplata bonusa će biti sjutradan, u subotu.",
     
    ]
  },
  6: {
    title: "Uzleti uz Super Heli!",
    subtitle: "Uplati depozit u minimalnom iznosu od 5€, izvrti ga na kazinu jer te sjutra očekuju freebet-ovi na popularnoj igri Super Heli!",
    image: "./assets/images/header/image6.jpg",
    description: [
      "U toku promocije potrebno je da igrač uplati min. 5€ I da deposit iskoristi na kazino ponudi kako bi dobio 15 freebet-ova.",
      "Svaki dodijeljeni Freebet je vrijedan 0.10€.",
      "Dobitak se može isplatiti na keš račun igrača u bilo kom trenutku nakon što koeficijent dostigne minimalni iznos od 1.95.",
      "Freebet-ovi se uplacuju  sjutradan do 12h.",     
    ]
  },
  7: {
    title: "Dan za spinove",
    subtitle: "Svake nedjelje, uplatom depozita putem SST terminala ili u poslovnici ostvaruješ pravo na 50 besplatnih spinova!",
    image: "./assets/images/header/image7.jpg",
    description: [
      "Minimalna uplata depozita za osvajanje spinova je 10€.",
      "Spinovi će biti uplaćen sljedećeg dana do 11h.",
      "Potrebno je iskoristiti cjelokupan iznos prvog depozita do kraja dana (23:59:59h) kako bi spinovi bili uplaćeni.",
      "Pripremi se za nezaboravnu zabavu i osvoji spinove! ",     
    ]
  },
  8: {
    title: "Win&Go cashback 100%!",
    subtitle: "Igrajući Win&Go brojeve ne mozeš izgubiti!",
    image: "./assets/images/header/image1.jpg",
    description: [
      "Promocija je aktivna za Win&Go brojeve.",
      "100% cashback se uplaćuje na ukupni gubitak na Win&Go tiketima koji ispunjavaju pravila promocije",
      "Ukupni gubitak se obračunava po sistemu: Razlika ukupnog uloga i ukupnog dobitka na svim odigranim tiketima koji učestvuju u promociji",
      "Maksimalan iznos bonusa koji jedan igrač može da ostvari je 10€.",
      "Cashback se uplaćuje sjutradan do 15h"
    ]
  },
  9: {
    title: "Sport cashback!",
    subtitle: "Odigraj tiket i ukoliko je nedobitan, dobijaš 50% cashback na bonus račun!",
    image: "./assets/images/header/image2.jpg",
    description: [
      "U promociji učestvuju svi tiketi koji su uplaćeni i rezultovani u toku trajanja iste.",
      "Promocija važi za hronoliški prvi tiket u periodu trajanja.",
      "Minimalna uplata na tiketu mora biti 2€.",
      "Minimalna kvota po događaju 1.30.",
      "Ukoliko je tiket rezultovan kao nedobitan, Meridian te časti povraćajem uplate na bonus račun.",
      "Maksimalni iznos bonusa je 20€.",
    ]
  },
  10: {
    title: "Kartica donosi dodatnih 20% bonusa!",
    subtitle: "Uplati depozit putem kartice i čeka te 40% bonusa na prvu uplatu!",
    image: "./assets/images/header/image3.jpg",
    description: [
      "Svake srijede, na prvu uplatu putem kartice u iznosu od 10€, ostvarujete pravo na bonus od 20%. ",
      "Bonus će biti uplaćen sljedećeg dana do 11h.",
      "Potrebno je iskoristiti cjelokupan iznos prvog depozita do kraja dana (23:59:59h) kako bi bonus bio uplaćen.",
      "Maksimalni iznos sportskog bonusa na dnevnom nivou iznosi 10€.",
     
    ]
  },
  11: {
    title: "Aviator kiša freebet-ova!",
    subtitle: "Uplati depozit u minimalnom iznosu od 5€, izvrti ga na kazinu kako bi dobio freebet-ove na Aviatoru!",
    image: "./assets/images/header/image4.jpg",
    description: [
      "Uplati depozit u minimalnom iznosu od 5€, izvrti ga na kazinu kako bi dobio freebet-ove na Aviatoru! ",
      "Svaki dodijeljeni Freebet je vrijedan 0.10€.",
      "Dobitak se može isplatiti na keš račun igrača u bilo kom trenutku nakon što koeficijent dostigne minimalni iznos od 1.95.",
      "Freebet-ovi se uplacuju sjutradan do 12h.",
     
    ]
  },
  12: {
    title: "Igra dana GG&3+",
    subtitle: "Petak je dan za golove! Samo danas odigraj najviše tiketa koji sadrže igru GG&3+ i kvalifikuj se za bonus.",
    image: "./assets/images/header/image5.jpg",
    description: [
      "20 igrača koji budu imali najveći broj tiketa koji sadrže igru GG&3+ ( minimum 1 događaj sa ovom igrom po tiketu) dobijaju po 20€ bonusa",
      "Minimalna uplata 1€.",
      "Ne važi za tikete odigrane sa bonus novcem.",
      "Ne važi za tikete koji su obrađeni turbo kešom.",
      "Maximalna isplata na tiketu je 100€",
      "Proglašenje dobitnika bonusa i uplata bonusa će biti sjutradan, u subotu.",
     
    ]
  },
  13: {
    title: "Uzleti uz Super Heli!",
    subtitle: "Uplati depozit u minimalnom iznosu od 5€, izvrti ga na kazinu jer te sjutra očekuju freebet-ovi na popularnoj igri Super Heli!",
    image: "./assets/images/header/image6.jpg",
    description: [
      "U toku promocije potrebno je da igrač uplati min. 5€ I da deposit iskoristi na kazino ponudi kako bi dobio 15 freebet-ova.",
      "Svaki dodijeljeni Freebet je vrijedan 0.10€.",
      "Dobitak se može isplatiti na keš račun igrača u bilo kom trenutku nakon što koeficijent dostigne minimalni iznos od 1.95.",
      "Freebet-ovi se uplacuju  sjutradan do 12h.",     
    ]
  },
  14: {
    title: "Dan za spinove",
    subtitle: "Svake nedjelje, uplatom depozita putem SST terminala ili u poslovnici ostvaruješ pravo na 50 besplatnih spinova!",
    image: "./assets/images/header/image7.jpg",
    description: [
      "Minimalna uplata depozita za osvajanje spinova je 10€.",
      "Spinovi će biti uplaćen sljedećeg dana do 11h.",
      "Potrebno je iskoristiti cjelokupan iznos prvog depozita do kraja dana (23:59:59h) kako bi spinovi bili uplaćeni.",
      "Pripremi se za nezaboravnu zabavu i osvoji spinove! ",     
    ]
  },
};

window.onload = function () {
  // Dobijamo trenutni mesec i godinu
  const today = new Date();
  const currentMonth = today.getMonth(); // Trenutni mesec (0 - 11)
  const currentYear = today.getFullYear(); // Trenutna godina

  // Pozivamo funkciju da generišemo kalendar za trenutni mesec i godinu
  generateCalendar(currentMonth, currentYear);
};

function generateCalendar(month, year) {
  const calendarWeeksContainer = document.getElementById('calendar-weeks');
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Ukupan broj dana u mesecu
  const firstDay = new Date(year, month, 1).getDay(); // Prvi dan u mesecu (0=nedelja, 1=ponedeljak itd.)

  // Ako je prvi dan meseca nedelja (0), moramo da ga tretiramo kao početak nedelje
  const startDay = firstDay === 0 ? 7 : firstDay; // Ako je nedelja, početak je 7 (nedelja)

  // Čistimo prethodni sadržaj kalendara
  calendarWeeksContainer.innerHTML = '';

  // Dodajemo prazne dane pre prvog dana meseca
  let weekHtml = '<div class="week">';
  for (let i = 1; i < startDay; i++) {
    weekHtml += '<div class="day noDate"></div>';
  }

  // Dodajemo dane meseca
  for (let day = 1; day <= daysInMonth; day++) {
    weekHtml += `
      <div class="day" data-day="${day}" onclick="togglePopup(event)">
        <span class="date">${day}</span>
        <div class="surprise">
          <a class="close-btn" href="#"></a>
        </div>
      </div>
    `;
    // Ako je kraj nedelje (7 dana), započinjemo novu nedelju
    if ((startDay + day - 1) % 7 === 0) {
      weekHtml += '</div><div class="week">';
    }
  }

  // Dodajemo prazne dane ako poslednja sedmica nije popunjena
  const remainingDaysInWeek = (startDay + daysInMonth - 1) % 7;
  if (remainingDaysInWeek !== 0) {
    for (let i = remainingDaysInWeek; i < 7; i++) {
      weekHtml += '<div class="day noDate"></div>';
    }
  }

  // Zatvaramo poslednju sedmicu
  weekHtml += '</div>';
  calendarWeeksContainer.innerHTML = weekHtml;

  // Postavljanje stanja dana
  updateCalendarStates();
}

let isAnimating = false;

// Funkcija za otvaranje i zatvaranje popupa sa animacijama
function togglePopup() {
  const modal = document.getElementById('modal');
  
  if (isAnimating) return;  // Ne dozvoljava ponovno otvaranje dok traje animacija
  isAnimating = true;

  if (!modal.classList.contains('active')) {
    modal.classList.add('active');
    modal.addEventListener('animationend', function handleAnimationEnd() {
      modal.removeEventListener('animationend', handleAnimationEnd);
      isAnimating = false;
    });
  } else {
    modal.classList.add('moveOut');
    modal.addEventListener('animationend', function handleAnimationEnd() {
      modal.removeEventListener('animationend', handleAnimationEnd);
      modal.classList.remove('active', 'moveOut');
      isAnimating = false;
    });
  }
}

// Izmena generisanja kalendara
function updateCalendarStates() {
  var d = new Date();
  var todaysDate = d.getDate(); // Dnevni datum
  var target = $("#calendar .week .day .date");

  let currentImageIndex = 0;

  target.each(function () {
    var day = $(this).html(); // Dan u mesecu
    var giftElement = $(this).parent();

    if (todaysDate == day) {
      $(this).addClass("today");
      giftElement.addClass("past"); // Današnji dan je klikabilan
    }

    if (todaysDate < day) {
      giftElement.addClass("future"); // Budući dan je onemogućen
      giftElement.addClass("no-click"); // Onemogući klik
      giftElement.css({
        'background-image': 'url(img/gift.png)',
        'background-repeat': 'no-repeat',
        'background-size': 'contain',
        'background-position': 'center',
      });
    }

    if (todaysDate >= day) {
      giftElement.addClass("past"); // Prošli dan je klikabilan

      // Provera da li postoji promocija za taj dan
      const promo = promotions[day];  // Tražimo promociju za određeni dan
      if (promo) {
        // Postavljanje slike za prošli dan samo ako postoji promocija
        if ($(this).siblings(".surprise").html().trim() !== "") {
          giftElement.addClass("gift-open");

          var currentImage = giftImages[currentImageIndex];
          giftElement.css({
            'background-image': `url(${currentImage})`,
            'background-repeat': 'no-repeat',
            'background-size': 'contain',
            'background-position': 'center'
          });

          currentImageIndex++;

          if (currentImageIndex >= giftImages.length) {
            currentImageIndex = 0;
          }
        }
      } else {
        // Ako nema promocije, dan je neklikabilan i nema slike
        giftElement.addClass("no-click");
        giftElement.css({
          'background-image': 'none',
        });
      }
    }
  });

  // Handle klikove na dane
  $(".day").click(function () {
    const dayId = $(this).data("day");  // Uzimamo data-day atribut sa klika

    // Proveravamo da li je kliknut dan koji je 'future' ili 'no-click'
    if ($(this).hasClass("future") || $(this).hasClass("no-click")) {
      return; // Ne dozvoljava klik ako je dan sa klasom 'future' ili 'no-click'
    }

    const promo = promotions[dayId];  // Tražimo promociju za određeni dan

    if (!promo) {
      console.log("Nema promocije za ovaj dan."); // Ako nema promocije, ne otvaraj popup
      return;
    }

    // Generišemo sadržaj za popup
    const popupContent = `
      <div class="header-flex">
        <h2><i>${promo.title}</i></h2>
      </div>
      <ul class="list-top">
      <h3>${promo.subtitle}</h3>
        ${promo.description
          .map(
            (item) =>
              `<div class="list-rules"><i class="fa-solid fa-check"></i><li>${item}</li></div>`
          )
          .join("")}
      </ul>
    `;

    // Prikazujemo sadržaj u modalu
    $("#modal .wrapper .content .box").html(popupContent);
    $(".header-flex").css("background", `url(${promo.image})`);
    $(".header-flex").css("background-size", "cover"); // Prilagođavanje veličine slike
    $(".header-flex").css("background-position", "center"); // Pozicija slike
  
    togglePopup();  // Otvori popup
  });
}

