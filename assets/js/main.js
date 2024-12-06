$(function () {
  "use strict";

  //===== Sticky

  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".navbar-area").removeClass("sticky");
      $(".navbar-area img").attr("src", "assets/images/logo.svg");
    } else {
      $(".navbar-area").addClass("sticky");
      $(".navbar-area img").attr("src", "assets/images/logo-2.svg");
    }
  });

  //===== Section Menu Active

  var scrollLink = $(".page-scroll");
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 73;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });

  //===== close navbar-collapse when a  clicked

  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });

  //===== Sidebar

  $('[href="#side-menu-left"], .overlay-left').on("click", function (event) {
    $(".sidebar-left, .overlay-left").addClass("open");
  });

  $('[href="#close"], .overlay-left').on("click", function (event) {
    $(".sidebar-left, .overlay-left").removeClass("open");
  });

  //===== Slick

  $(".slider-items-active").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    arrows: true,
    prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });



  //===== Back to top

  // Show or hide the sticky footer button
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });

  //Animate the scroll to yop
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  //=====

  $(".show-more").click(function () {
    if ($("#text").hasClass("show-more-height")) {
      $(this).text("PRIKAŽI MANJE");
    } else {
      $(this).text("PRIKAŽI VIŠE");
    }

    $("#text").toggleClass("show-more-height");
  });
});

// Active page

var url = window.location.pathname;
var fileName = url.substring(url.lastIndexOf('/')+1);

$('a[href="' + fileName + '"]').parent().addClass('active');

/*SWIPER FOOTER*/

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 15,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },

    640: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 8.5,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 15,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 6.5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 12.5,
      spaceBetween: 10,
    },
  },
});


// Odredite koja klasa će biti animirana na osnovu širine ekrana
const isMobile = window.innerWidth <= 895; // Možete promeniti vrednost na odgovarajući breakpoint
const meridianClass = isMobile ? '.meridian1' : '.meridian';

gsap.timeline()
  .from(meridianClass, {
    duration: 1.2,
    opacity: 0,
    scale: 0.8,
    y: 50,
    ease: "back.out(1.7)"
  })
  .from([".calendar-title", ".calendar-title-2"], {
    duration: 1,
    opacity: 0,
    y: 30,
    stagger: 0.2, // Mali razmak između naslova
    ease: "power2.out"
  });


  //Snow and sparkle animation

// Snow and sparkle animation

// Generička funkcija za kreiranje i animiranje elemenata
const container = document.querySelector('.snow-container');

function createEffect(type, config) {
  const element = document.createElement('div');
  element.classList.add(type);
  element.textContent = config.symbol || ''; // Simbol, ako postoji

  // Nasumična početna pozicija i stilovi
  element.style.left = `${Math.random() * window.innerWidth}px`;
  element.style.top = `${Math.random() * -200}px`;
  element.style.fontSize = `${Math.random() * config.sizeRange + config.minSize}px`;
  element.style.opacity = Math.random() * config.opacityRange + config.minOpacity;

  container.appendChild(element);

  // Animacija sa GSAP
  gsap.to(element, {
    y: window.innerHeight + config.offsetY, // Pada ispod ekrana
    x: `+=${Math.random() * config.horizontalRange - config.horizontalRange / 2}`,
    duration: Math.random() * config.durationRange + config.minDuration,
    opacity: config.fadeOut ? 0 : element.style.opacity, // Opcija za postepeno nestajanje
    ease: "none",
    delay: Math.random() * config.delayRange,
    onComplete: () => {
      element.remove();
      createEffect(type, config); // Ponovno kreiranje elementa
    },
  });
}

// Inicijalizacija efekata
function initEffects(effectConfigs) {
  effectConfigs.forEach(({ type, count, config }) => {
    for (let i = 0; i < count; i++) {
      createEffect(type, config);
    }
  });
}

// Funkcija za prilagođavanje efekata na osnovu širine ekrana
function adjustEffectsForScreenSize(effects) {
  const isMobile = window.innerWidth <= 600; // Proverite da li je širina ekrana manja ili jednaka 600px

  // Prilagodite broj snežnih čestica za mobilne uređaje
  if (isMobile) {
    effects.forEach(effect => {
      if (effect.type === 'snowflake') {
        effect.count = 40; // Smanjite broj snežnih čestica na mobilnim uređajima
      }
    });
  } else {
    effects.forEach(effect => {
      if (effect.type === 'snowflake') {
        effect.count = 80; // Povratak na originalni broj čestica za desktop
      }
    });
  }

  // Pokrenite efekat sa ažuriranim konfiguracijama
  initEffects(effects);
}

// Konfiguracije efekata
const effects = [
  {
    type: 'snowflake',
    count: 80, // Početni broj snežnih čestica
    config: {
      symbol: '❄',
      sizeRange: 20,
      minSize: 10,
      opacityRange: 1,
      minOpacity: 0.5,
      offsetY: 50,
      horizontalRange: 200,
      durationRange: 10,
      minDuration: 5,
      delayRange: 10,
    },
  },
  {
    type: 'sparkle',
    count: 50,
    config: {
      symbol: '✦',
      sizeRange: 15,
      minSize: 5,
      opacityRange: 0.8,
      minOpacity: 0.2,
      offsetY: 50,
      horizontalRange: 100,
      durationRange: 4,
      minDuration: 3,
      delayRange: 5,
      fadeOut: true,
    },
  },
  {
    type: 'glow',
    count: 20,
    config: {
      symbol: '',
      sizeRange: 50,
      minSize: 20,
      opacityRange: 1,
      minOpacity: 0.5,
      offsetY: 0,
      horizontalRange: 0,
      durationRange: 2,
      minDuration: 1,
      delayRange: 2,
      fadeOut: true,
    },
  },
];

// Pokrenite efekat sa odgovarajućim brojem snežnih čestica
adjustEffectsForScreenSize(effects);

// Ako se prozor promeni, ponovo prilagodite efekat
window.addEventListener('resize', function() {
  adjustEffectsForScreenSize(effects);
});
