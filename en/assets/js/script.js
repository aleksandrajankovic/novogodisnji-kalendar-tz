const giftImages = [
  'img/icon1.png',
  'img/icon2.png',
  'img/icon3.png',
  'img/icon4.png',
  'img/icon5.png',
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
    title: "Kartica donosi dodatnih 20% bonusa!",
    subtitle: "Uplati depozit putem kartice i čeka te 40% bonusa na prvu uplatu!",
    image: "./assets/images/header/image3.jpg",
    description: [
      "Svake srijede, na prvu uplatu putem kartice u iznosu od 10€, ostvarujete pravo na bonus od 20%. ",
      "Bonus će biti uplaćen sljedećeg dana do 11h.",
      "Potrebno je iskoristiti cjelokupan iznos prvog depozita do kraja dana (23:59:59h) kako bi bonus bio uplaćen.",
      "Maksimalni iznos sportskog bonusa na dnevnom nivou iznosi 10€.",
     
    ],
    month: "January",
    link:"https://promo.meridianbet.me/sr/category/580/page/15031",
    button:"UPLATI DEPOZIT"
  },
  2: {
    title: "Aviator kiša freebet-ova!",
    subtitle: "Uplati depozit u minimalnom iznosu od 5€, izvrti ga na kazinu kako bi dobio freebet-ove na Aviatoru!",
    image: "./assets/images/header/image4.jpg",
    description: [
      "U toku promocije potrebno je da igrač uplati min. 5€ i da deposit iskoristi na kazino ponudi kako bi dobio 10 freebet-ova.",
      "Svaki dodijeljeni Freebet je vrijedan 0.10€.",
      "Dobitak se može isplatiti na keš račun igrača u bilo kom trenutku nakon što koeficijent dostigne minimalni iznos od 1.95.",
      "Freebet-ovi se uplacuju sjutradan do 12h.",
     
    ],
    month: "January",
    link:"https://promo.meridianbet.me/sr/category/580/page/25421",
    button:"UPLATI"
  },
  3: {
    title: "Igra dana GG&3+",
    subtitle: "Petak je dan za golove! Samo danas odigraj najviše tiketa koji sadrže igru GG&3+ i kvalifikuj se za bonus.",
    image: "./assets/images/header/image5.jpg",
    description: [
      "20 igrača koji budu imali najveći broj tiketa koji sadrže igru GG&3+ (minimum 1 događaj sa ovom igrom po tiketu) dobijaju po 20€ bonusa",
      "Minimalna uplata 1€.",
      "Ne važi za tikete odigrane sa bonus novcem.",
      "Ne važi za tikete koji su obrađeni turbo kešom.",
      "Maximalna isplata na tiketu je 100€",
      "Proglašenje dobitnika bonusa i uplata bonusa će biti sjutradan, u subotu.",
     
    ],
    month: "January",
    link:"https://promo.meridianbet.me/sr/category/580/page/15044",
    button:"ODIGRAJ TIKET"
  },
  4: {
    title: "Uzleti uz Super Heli!",
    subtitle: "Uplati depozit u minimalnom iznosu od 5€, izvrti ga na kazinu jer te sjutra očekuju freebet-ovi na popularnoj igri Super Heli!",
    image: "./assets/images/header/image6.jpg",
    description: [
      "U toku promocije potrebno je da igrač uplati min. 5€ I da deposit iskoristi na kazino ponudi kako bi dobio 15 freebet-ova.",
      "Svaki dodijeljeni Freebet je vrijedan 0.10€.",
      "Dobitak se može isplatiti na keš račun igrača u bilo kom trenutku nakon što koeficijent dostigne minimalni iznos od 1.95.",
      "Freebet-ovi se uplacuju  sjutradan do 12h.",     
    ],
    month: "January",
    link:"https://promo.meridianbet.me/sr/category/580/page/25425",
    button:"UPLATI"
  },
  5: {
    title: "Dan za spinove",
    subtitle: "Svake nedjelje, uplatom depozita putem SST terminala ili u poslovnici ostvaruješ pravo na 50 besplatnih spinova!",
    image: "./assets/images/header/image7.jpg",
    description: [
      "Minimalna uplata depozita za osvajanje spinova je 10€.",
      "Spinovi će biti uplaćen sljedećeg dana do 11h.",
      "Potrebno je iskoristiti cjelokupan iznos prvog depozita do kraja dana (23:59:59h) kako bi spinovi bili uplaćeni.",
      "Pripremi se za nezaboravnu zabavu i osvoji spinove! ",     
    ],
    month: "January",
    link:"https://promo.meridianbet.me/sr/category/400/page/25427",
    button:"UPLATI DEPOZIT"
  },
  6: {
    title: "Win&Go cashback 100%!",
    subtitle: "Igrajući Win&Go brojeve ne mozeš izgubiti!",
    image: "./assets/images/header/image1.jpg",
    description: [
      "Promocija je aktivna za Win&Go brojeve.",
      "100% cashback se uplaćuje na ukupni gubitak na Win&Go tiketima koji ispunjavaju pravila promocije",
      "Ukupni gubitak se obračunava po sistemu: Razlika ukupnog uloga i ukupnog dobitka na svim odigranim tiketima koji učestvuju u promociji",
      "Maksimalan iznos bonusa koji jedan igrač može da ostvari je 10€.",
      "Cashback se uplaćuje sjutradan do 15h"
    ],
    month: "January",
    link:"https://promo.meridianbet.me/sr/category/580/page/15046",
    button:"ODIGRAJ"
  },
  7: {
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
    ],
    month: "January",
    link:"https://promo.meridianbet.me/sr/category/30/page/15052",
    button:"ODIGRAJ TIKET"
  },
  8: {
    title: "Kartica donosi dodatnih 20% bonusa!",
    subtitle: "Uplati depozit putem kartice i čeka te 40% bonusa na prvu uplatu!",
    image: "./assets/images/header/image3.jpg",
    description: [
      "Svake srijede, na prvu uplatu putem kartice u iznosu od 10€, ostvarujete pravo na bonus od 20%. ",
      "Bonus će biti uplaćen sljedećeg dana do 11h.",
      "Potrebno je iskoristiti cjelokupan iznos prvog depozita do kraja dana (23:59:59h) kako bi bonus bio uplaćen.",
      "Maksimalni iznos sportskog bonusa na dnevnom nivou iznosi 10€.",
     
    ],
    month: "January",
    link:"https://promo.meridianbet.me/sr/category/580/page/15031",
    button:"UPLATI DEPOZIT"
  },
  9: {
    title: "Aviator kiša freebet-ova!",
    subtitle: "Uplati depozit u minimalnom iznosu od 5€, izvrti ga na kazinu kako bi dobio freebet-ove na Aviatoru!",
    image: "./assets/images/header/image4.jpg",
    description: [
      "U toku promocije potrebno je da igrač uplati min. 5€ I da deposit iskoristi na kazino ponudi kako bi dobio 10 freebet-ova.",
      "Svaki dodijeljeni Freebet je vrijedan 0.10€.",
      "Dobitak se može isplatiti na keš račun igrača u bilo kom trenutku nakon što koeficijent dostigne minimalni iznos od 1.95.",
      "Freebet-ovi se uplacuju sjutradan do 12h.",
     
    ],
    month: "January",
    link:"https://promo.meridianbet.me/sr/category/580/page/25421",
    button:"UPLATI"
  },
  10: {
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
     
    ],
    month: "January",
    link:"https://promo.meridianbet.me/sr/category/580/page/15044",
    button:"ODIGRAJ TIKET"
  },
  11: {
    title: "Uzleti uz Super Heli!",
    subtitle: "Uplati depozit u minimalnom iznosu od 5€, izvrti ga na kazinu jer te sjutra očekuju freebet-ovi na popularnoj igri Super Heli!",
    image: "./assets/images/header/image6.jpg",
    description: [
      "U toku promocije potrebno je da igrač uplati min. 5€ I da deposit iskoristi na kazino ponudi kako bi dobio 15 freebet-ova.",
      "Svaki dodijeljeni Freebet je vrijedan 0.10€.",
      "Dobitak se može isplatiti na keš račun igrača u bilo kom trenutku nakon što koeficijent dostigne minimalni iznos od 1.95.",
      "Freebet-ovi se uplacuju sjutradan do 12h.",     
    ],
    month: "January",
    link:"https://promo.meridianbet.me/sr/category/580/page/25425",
    button:"UPLATI"
  },
  12: {
    title: "Dan za spinove",
    subtitle: "Svake nedjelje, uplatom depozita putem SST terminala ili u poslovnici ostvaruješ pravo na 50 besplatnih spinova!",
    image: "./assets/images/header/image7.jpg",
    description: [
      "Minimalna uplata depozita za osvajanje spinova je 10€.",
      "Spinovi će biti uplaćen sljedećeg dana do 11h.",
      "Potrebno je iskoristiti cjelokupan iznos prvog depozita do kraja dana (23:59:59h) kako bi spinovi bili uplaćeni.",
      "Pripremi se za nezaboravnu zabavu i osvoji spinove! ",     
    ],
    month: "January",
    link:"https://promo.meridianbet.me/sr/category/400/page/25427",
    button:"UPLATI DEPOZIT"
  },
  13: {
    title: "Win&Go cashback 100%!",
    subtitle: "Igrajući Win&Go brojeve ne mozeš izgubiti!",
    image: "./assets/images/header/image1.jpg",
    description: [
      "Promocija je aktivna za Win&Go brojeve.",
      "100% cashback se uplaćuje na ukupni gubitak na Win&Go tiketima koji ispunjavaju pravila promocije",
      "Ukupni gubitak se obračunava po sistemu: Razlika ukupnog uloga i ukupnog dobitka na svim odigranim tiketima koji učestvuju u promociji",
      "Maksimalan iznos bonusa koji jedan igrač može da ostvari je 10€.",
      "Cashback se uplaćuje sjutradan do 15h"
    ],
    month: "January",
    link:"https://promo.meridianbet.me/sr/category/580/page/15046",
    button:"ODIGRAJ"
  },
  14: {
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
    ],
    month: "January",
    link:"https://promo.meridianbet.me/sr/category/30/page/15052",
    button:"ODIGRAJ TIKET"
  },
  15: [{
    title: "Kartica donosi dodatnih 20% bonusa!",
    subtitle: "Uplati depozit putem kartice i čeka te 40% bonusa na prvu uplatu!",
    image: "./assets/images/header/image3.jpg",
    description: [
      "Svake srijede, na prvu uplatu putem kartice u iznosu od 10€, ostvarujete pravo na bonus od 20%. ",
      "Bonus će biti uplaćen sljedećeg dana do 11h.",
      "Potrebno je iskoristiti cjelokupan iznos prvog depozita do kraja dana (23:59:59h) kako bi bonus bio uplaćen.",
      "Maksimalni iznos sportskog bonusa na dnevnom nivou iznosi 10€.",
     
    ],
    month: "January",
    link:"https://promo.meridianbet.me/sr/category/580/page/15031",
    button:"UPLATI DEPOZIT"
  },
 {
    title: "Dan za spinove",
    subtitle: "Svake nedjelje, uplatom depozita putem SST terminala ili u poslovnici ostvaruješ pravo na 50 besplatnih spinova!",
    image: "./assets/images/header/image7.jpg",
    description: [
      "Minimalna uplata depozita za osvajanje spinova je 10€.",
      "Spinovi će biti uplaćen sljedećeg dana do 11h.",
      "Potrebno je iskoristiti cjelokupan iznos prvog depozita do kraja dana (23:59:59h) kako bi spinovi bili uplaćeni.",
      "Pripremi se za nezaboravnu zabavu i osvoji spinove! ",     
    ],
    month: "December",
    link:"https://promo.meridianbet.me/sr/category/400/page/25427",
    button:"UPLATI DEPOZIT",
  }],
  16: {
    title: "Win&Go cashback 100%!",
    subtitle: "Igrajući Win&Go brojeve ne mozeš izgubiti!",
    image: "./assets/images/header/image1.jpg",
    description: [
      "Promocija je aktivna za Win&Go brojeve.",
      "100% cashback se uplaćuje na ukupni gubitak na Win&Go tiketima koji ispunjavaju pravila promocije",
      "Ukupni gubitak se obračunava po sistemu: Razlika ukupnog uloga i ukupnog dobitka na svim odigranim tiketima koji učestvuju u promociji",
      "Maksimalan iznos bonusa koji jedan igrač može da ostvari je 10€.",
      "Cashback se uplaćuje sjutradan do 15h"
    ],
    month: "December",
    link:"https://promo.meridianbet.me/sr/category/580/page/15046",
    button:"ODIGRAJ"
  },
  17: {
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
    ],
    month: "December",
    link:"https://promo.meridianbet.me/sr/category/30/page/15052",
    button:"ODIGRAJ TIKET",
  },
  
  18: {
    title: "Kartica donosi dodatnih 20% bonusa!",
    subtitle: "Uplati depozit putem kartice i čeka te 40% bonusa na prvu uplatu!",
    image: "./assets/images/header/image3.jpg",
    description: [
      "Svake srijede, na prvu uplatu putem kartice u iznosu od 10€, ostvarujete pravo na bonus od 20%. ",
      "Bonus će biti uplaćen sljedećeg dana do 11h.",
      "Potrebno je iskoristiti cjelokupan iznos prvog depozita do kraja dana (23:59:59h) kako bi bonus bio uplaćen.",
      "Maksimalni iznos sportskog bonusa na dnevnom nivou iznosi 10€.",
     
    ],
    month: "December",
    link:"https://promo.meridianbet.me/sr/category/580/page/15031",
    button:"UPLATI DEPOZIT"
  },
  19: {
    title: "Aviator kiša freebet-ova!",
    subtitle: "Uplati depozit u minimalnom iznosu od 5€, izvrti ga na kazinu kako bi dobio freebet-ove na Aviatoru!",
    image: "./assets/images/header/image4.jpg",
    description: [
      "U toku promocije potrebno je da igrač uplati min. 5€ I da deposit iskoristi na kazino ponudi kako bi dobio 10 freebet-ova.",
      "Svaki dodijeljeni Freebet je vrijedan 0.10€.",
      "Dobitak se može isplatiti na keš račun igrača u bilo kom trenutku nakon što koeficijent dostigne minimalni iznos od 1.95.",
      "Freebet-ovi se uplacuju sjutradan do 12h.",
     
    ],
    month: "December",
    link:"https://promo.meridianbet.me/sr/category/580/page/25421",
    button:"UPLATI"
  },
  20: {
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
     
    ],
    month: "December",
    link:"https://promo.meridianbet.me/sr/category/580/page/15044",
    button:"ODIGRAJ TIKET"
  },
  21: {
    title: "Uzleti uz Super Heli!",
    subtitle: "Uplati depozit u minimalnom iznosu od 5€, izvrti ga na kazinu jer te sjutra očekuju freebet-ovi na popularnoj igri Super Heli!",
    image: "./assets/images/header/image6.jpg",
    description: [
      "U toku promocije potrebno je da igrač uplati min. 5€ I da deposit iskoristi na kazino ponudi kako bi dobio 15 freebet-ova.",
      "Svaki dodijeljeni Freebet je vrijedan 0.10€.",
      "Dobitak se može isplatiti na keš račun igrača u bilo kom trenutku nakon što koeficijent dostigne minimalni iznos od 1.95.",
      "Freebet-ovi se uplacuju  sjutradan do 12h.",     
    ],
    month: "December",
    link:"https://promo.meridianbet.me/sr/category/580/page/25425",
    button:"UPLATI"
  },
  22: {
    title: "Dan za spinove",
    subtitle: "Svake nedjelje, uplatom depozita putem SST terminala ili u poslovnici ostvaruješ pravo na 50 besplatnih spinova!",
    image: "./assets/images/header/image7.jpg",
    description: [
      "Minimalna uplata depozita za osvajanje spinova je 10€.",
      "Spinovi će biti uplaćen sljedećeg dana do 11h.",
      "Potrebno je iskoristiti cjelokupan iznos prvog depozita do kraja dana (23:59:59h) kako bi spinovi bili uplaćeni.",
      "Pripremi se za nezaboravnu zabavu i osvoji spinove! ",     
    ],
    month: "December",
    link:"https://promo.meridianbet.me/sr/category/400/page/25427",
    button:"UPLATI DEPOZIT"
  },
  23: {
    title: "Win&Go cashback 100%!",
    subtitle: "Igrajući Win&Go brojeve ne mozeš izgubiti!",
    image: "./assets/images/header/image1.jpg",
    description: [
      "Promocija je aktivna za Win&Go brojeve.",
      "100% cashback se uplaćuje na ukupni gubitak na Win&Go tiketima koji ispunjavaju pravila promocije",
      "Ukupni gubitak se obračunava po sistemu: Razlika ukupnog uloga i ukupnog dobitka na svim odigranim tiketima koji učestvuju u promociji",
      "Maksimalan iznos bonusa koji jedan igrač može da ostvari je 10€.",
      "Cashback se uplaćuje sjutradan do 15h"
    ],
    month: "December",
    link:"https://promo.meridianbet.me/sr/category/580/page/15046",
    button:"ODIGRAJ"
  },
  24: {
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
    ],
    month: "December",
    link:"https://promo.meridianbet.me/sr/category/30/page/15052",
    button:"ODIGRAJ TIKET"
  },
  25: {
    title: "Kartica donosi dodatnih 20% bonusa!",
    subtitle: "Uplati depozit putem kartice i čeka te 40% bonusa na prvu uplatu!",
    image: "./assets/images/header/image3.jpg",
    description: [
      "Svake srijede, na prvu uplatu putem kartice u iznosu od 10€, ostvarujete pravo na bonus od 20%. ",
      "Bonus će biti uplaćen sljedećeg dana do 11h.",
      "Potrebno je iskoristiti cjelokupan iznos prvog depozita do kraja dana (23:59:59h) kako bi bonus bio uplaćen.",
      "Maksimalni iznos sportskog bonusa na dnevnom nivou iznosi 10€.",
     
    ],
    month: "December",
    link:"https://promo.meridianbet.me/sr/category/580/page/15031",
    button:"UPLATI DEPOZIT"
  },
  26: {
    title: "Aviator kiša freebet-ova!",
    subtitle: "Uplati depozit u minimalnom iznosu od 5€, izvrti ga na kazinu kako bi dobio freebet-ove na Aviatoru!",
    image: "./assets/images/header/image4.jpg",
    description: [
      "U toku promocije potrebno je da igrač uplati min. 5€ I da deposit iskoristi na kazino ponudi kako bi dobio 10 freebet-ova.",
      "Svaki dodijeljeni Freebet je vrijedan 0.10€.",
      "Dobitak se može isplatiti na keš račun igrača u bilo kom trenutku nakon što koeficijent dostigne minimalni iznos od 1.95.",
      "Freebet-ovi se uplacuju sjutradan do 12h.",
     
    ],
    month: "December",
    link:"https://promo.meridianbet.me/sr/category/580/page/25421",
    button:"UPLATI"
  },
  27: {
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
     
    ],
    month: "December",
    link:"https://promo.meridianbet.me/sr/category/580/page/15044",
    button:"ODIGRAJ TIKET"
  },
  28: {
    title: "Uzleti uz Super Heli!",
    subtitle: "Uplati depozit u minimalnom iznosu od 5€, izvrti ga na kazinu jer te sjutra očekuju freebet-ovi na popularnoj igri Super Heli!",
    image: "./assets/images/header/image6.jpg",
    description: [
      "U toku promocije potrebno je da igrač uplati min. 5€ I da deposit iskoristi na kazino ponudi kako bi dobio 15 freebet-ova.",
      "Svaki dodijeljeni Freebet je vrijedan 0.10€.",
      "Dobitak se može isplatiti na keš račun igrača u bilo kom trenutku nakon što koeficijent dostigne minimalni iznos od 1.95.",
      "Freebet-ovi se uplacuju sjutradan do 12h.",     
    ],
    month: "December",
    link:"https://promo.meridianbet.me/sr/category/580/page/25425",
    button:"UPLATI"
  },
  29: {
    title: "Dan za spinove",
    subtitle: "Svake nedjelje, uplatom depozita putem SST terminala ili u poslovnici ostvaruješ pravo na 50 besplatnih spinova!",
    image: "./assets/images/header/image7.jpg",
    description: [
      "Minimalna uplata depozita za osvajanje spinova je 10€.",
      "Spinovi će biti uplaćen sljedećeg dana do 11h.",
      "Potrebno je iskoristiti cjelokupan iznos prvog depozita do kraja dana (23:59:59h) kako bi spinovi bili uplaćeni.",
      "Pripremi se za nezaboravnu zabavu i osvoji spinove! ",     
    ],
    month: "December",
    link:"https://promo.meridianbet.me/sr/category/400/page/25427",
    button:"UPLATI DEPOZIT"
  },
  30: {
    title: "Win&Go cashback 100%!",
    subtitle: "Igrajući Win&Go brojeve ne mozeš izgubiti!",
    image: "./assets/images/header/image1.jpg",
    description: [
      "Promocija je aktivna za Win&Go brojeve.",
      "100% cashback se uplaćuje na ukupni gubitak na Win&Go tiketima koji ispunjavaju pravila promocije",
      "Ukupni gubitak se obračunava po sistemu: Razlika ukupnog uloga i ukupnog dobitka na svim odigranim tiketima koji učestvuju u promociji",
      "Maksimalan iznos bonusa koji jedan igrač može da ostvari je 10€.",
      "Cashback se uplaćuje sjutradan do 15h"
    ],
    month: "December",
    link:"https://promo.meridianbet.me/sr/category/580/page/15046",
    button:"ODIGRAJ"
  },
  31: {
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
    ],
    month: "December",
    link:"https://promo.meridianbet.me/sr/category/30/page/15052",
    button:"ODIGRAJ TIKET"
  },
};

window.onload = function () {
  
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear(); 

  generateCalendar(currentMonth, currentYear);
};

function generateCalendar(month, year) {
  const calendarWeeksContainer = document.getElementById('calendar-weeks');
  const daysInMonth = new Date(year, month + 1, 0).getDate(); 
  const firstDay = new Date(year, month, 1).getDay(); 


  const startDay = firstDay === 0 ? 7 : firstDay; 

 
  calendarWeeksContainer.innerHTML = '';


  let weekHtml = '<div class="week">';
  for (let i = 1; i < startDay; i++) {
    weekHtml += '<div class="day noDate"></div>';
  }


  for (let day = 1; day <= daysInMonth; day++) {
    weekHtml += `
      <div class="day" data-day="${day}" onclick="togglePopup(event)">
        <span class="date">${day}</span>
        <div class="surprise">
          <a class="close-btn" href="#"></a>
        </div>
      </div>
    `;
  
    if ((startDay + day - 1) % 7 === 0) {
      weekHtml += '</div><div class="week">';
    }
  }


  const remainingDaysInWeek = (startDay + daysInMonth - 1) % 7;
  if (remainingDaysInWeek !== 0) {
    for (let i = remainingDaysInWeek; i < 7; i++) {
      weekHtml += '<div class="day noDate"></div>';
    }
  }

 
  weekHtml += '</div>';
  calendarWeeksContainer.innerHTML = weekHtml;


  updateCalendarStates(month);
}

let isAnimating = false;


function togglePopup() {
  const modal = document.getElementById('modal');
  
  if (isAnimating) return;  
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


function filterPromotionsByMonth(month) {
  const filteredPromotions = {};

  Object.keys(promotions).forEach(day => {
    const dayPromotions = promotions[day];
    if (Array.isArray(dayPromotions)) {
      dayPromotions.forEach(promo => {
        if (promo.month === month) {
          filteredPromotions[day] = promo;
        }
      });
    } else if (dayPromotions.month === month) {
      filteredPromotions[day] = dayPromotions;
    }
  });

  return filteredPromotions;
}

function updateCalendarStates(month) {
  const today = new Date();
  const todaysDate = today.getDate(); 
  const currentMonth = today.toLocaleString("en-US", { month: "long" }); 
  

  const filteredPromotions = filterPromotionsByMonth(currentMonth);


  const target = $("#calendar .week .day .date");
  let currentImageIndex = 0;

  target.each(function () {
    const day = $(this).html(); 
    const giftElement = $(this).parent();

    if (todaysDate == day) {
      $(this).addClass("today");
      giftElement.addClass("past"); 
    }

    if (todaysDate < day) {
      giftElement.addClass("future");
      giftElement.addClass("no-click");
      giftElement.css({
        'background-image': 'url(img/gift.png)',
        'background-repeat': 'no-repeat',
        'background-size': 'contain',
        'background-position': 'center',
      });
    }

    if (todaysDate >= day) {
      giftElement.addClass("past"); 

      
      const promo = filteredPromotions[day];
      if (promo) {
        
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
    const dayId = $(this).data("day"); 

   
    if ($(this).hasClass("future") || $(this).hasClass("no-click")) {
      return; // 
    }

    const promo = filteredPromotions[dayId];

    if (!promo) {
      console.log("Nema promocije za ovaj dan."); 
      return;
    }

    // Generišem sadržaj za popup
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
      <a href="${promo.link}" class="promo-link">${promo.button}</a>
    `;

    // Prikazujem sadržaj u modalu
    $("#modal .wrapper .content .box").html(popupContent);
    $(".header-flex").css("background", `url(${promo.image})`);
    $(".header-flex").css("background-size", "cover"); 
    $(".header-flex").css("background-position", "center"); 
  
    togglePopup(); 
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("current-year");
  const currentYear = new Date().getFullYear(); // Dohvata trenutnu godinu
  yearElement.textContent = currentYear;
});