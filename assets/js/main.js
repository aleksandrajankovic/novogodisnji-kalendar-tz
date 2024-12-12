
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

//Headline animation

const isMobile = window.innerWidth <= 895; 
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
    stagger: 0.2, 
    ease: "power2.out"
  });




// Snow and sparkle animation


const container = document.querySelector('.snow-container');

let activeEffects = 0; // Trenutni broj aktivnih efekata
const maxEffects = 50; // Maksimalan broj efekata u svakom trenutku

function createEffect(type, config) {
  if (activeEffects >= maxEffects) return; // Ograničenje broja efekata
  activeEffects++;

  const element = document.createElement('div');
  element.classList.add(type);
  element.textContent = config.symbol || '';

  element.style.left = `${Math.random() * window.innerWidth}px`;
  element.style.top = `${Math.random() * -window.innerHeight - config.startOffset}px`; // Startna pozicija
  element.style.fontSize = `${Math.random() * config.sizeRange + config.minSize}px`;
  element.style.opacity = Math.random() * config.opacityRange + config.minOpacity;

  container.appendChild(element);

  gsap.to(element, {
    y: window.innerHeight + config.offsetY,
    x: `+=${Math.random() * config.horizontalRange - config.horizontalRange / 2}`,
    duration: Math.random() * config.durationRange + config.minDuration,
    opacity: config.fadeOut ? 0 : element.style.opacity,
    ease: "none",
    delay: Math.random() * config.delayRange,
    onComplete: () => {
      container.removeChild(element); // Ukloni element iz DOM-a
      activeEffects--; // Smanji broj aktivnih efekata
    },
  });
}

function initEffects(effectConfigs) {
  effectConfigs.forEach(({ type, count, config }) => {
    for (let i = 0; i < count; i++) {
      createEffect(type, config);
    }
  });
}

function clearEffects() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  activeEffects = 0; // Resetuj broj aktivnih efekata
}

function adjustEffectsForScreenSize(effects) {
  clearEffects(); // Očistite prethodne efekte

  const isMobile = window.innerWidth <= 600;

  effects.forEach(effect => {
    if (isMobile) {
      if (effect.type === 'snowflake') {
        effect.count = 5;
        effect.config.sizeRange = 8;
        effect.config.minSize = 5;
        effect.config.durationRange = 20;
        effect.config.minDuration = 5;
      } else if (effect.type === 'sparkle') {
        effect.count = 5;
        effect.config.sizeRange = 10;
        effect.config.minSize = 5;
        effect.config.durationRange = 20;
        effect.config.minDuration = 5;
      }
    } else {
      if (effect.type === 'snowflake') {
        effect.count = 40;
        effect.config.sizeRange = 20;
        effect.config.minSize = 10;
        effect.config.durationRange = 20;
        effect.config.minDuration = 5;
      } else if (effect.type === 'sparkle') {
        effect.count = 40;
        effect.config.sizeRange = 15;
        effect.config.minSize = 5;
        effect.config.durationRange = 20;
        effect.config.minDuration = 3;
      }
    }
  });

  initEffects(effects);
}

// Konfiguracije efekata
const effects = [
  {
    type: 'snowflake',
    count: 40,
    config: {
      symbol: '❄',
      sizeRange: 20,
      minSize: 10,
      opacityRange: 1,
      minOpacity: 0.5,
      offsetY: 50,
      horizontalRange: 200,
      durationRange: 10,
      minDuration: 10,
      delayRange: 10,
      startOffset: 100,
    },
  },
  {
    type: 'sparkle',
    count: 40,
    config: {
      symbol: '✦',
      sizeRange: 15,
      minSize: 5,
      opacityRange: 0.8,
      minOpacity: 0.2,
      offsetY: 50,
      horizontalRange: 100,
      durationRange: 4,
      minDuration: 10,
      delayRange: 5,
      fadeOut: true,
      startOffset: 100,
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

adjustEffectsForScreenSize(effects);

// Prilagodite efekte na promeni veličine prozora
window.addEventListener('resize', function() {
  adjustEffectsForScreenSize(effects);
});
