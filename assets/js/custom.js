// $(window).on("load", function () {
//   $("#preloader").fadeOut(500);
// });

// header fix for Position fixed
jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 150) {
      $("header").addClass("header-fixed animated fadeInDown");
    } else {
      $("header").removeClass("header-fixed animated fadeInDown");
    }
  });
});

// wow js


let wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
});

if(wow){
  wow.init();
}

// var sliderThumbs = new Swiper ('.gallery-thumbs', {
//   slidesPerView: 'auto',
//   spaceBetween: 10,
//   // loop: true,
//   slideToClickedSlide: true,
//   // autoplay: {
//   //   delay: 3000,
//   //   disableOnInteraction: false,
//   // },
// });


//============================================================ hero slider ============================================================
var sliderThumbs = new Swiper(".gallery-thumbs", {
  slidesPerView: 2,
  loop: true,
  centerterSlides:true,
  freeMode: true,
  watchSlidesProgress: true,
});



var sliderHome = new Swiper(".slideSwiper", {
  speed: 1000,
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  // loopedSlides: 3,
  parallax: true,
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="sliderPagination ${className}"><small>${index < 9 ? `0${index + 1}` : index + 1}</small></span>`;
    },
  },
  thumbs: {
    swiper: sliderThumbs,
  },
});

// sliderHome.controller.control = sliderThumbs;
// sliderThumbs.controller.control = sliderHome;

//============================================================ hero slider ============================================================



//============================================================ expertise slider ============================================================
   // Initialize Swiper without loop
let swiper = new Swiper('.expertiseSlider', {
    slidesPerView: 1,
    lazy: true,
    loop: true,
    watchSlidesProgress: true, // Track slide progress for lazy loading
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      991: {
        spaceBetween: 20,
        slidesPerView: 1.25,
      }
    }
});

// Custom Nav Buttons
let expertiseNavs = document.querySelectorAll('.exp-slide-nav');

expertiseNavs.forEach((nav, index) => {
    nav.addEventListener('click', () => {
        swiper.loopDestroy(); // Disable loop temporarily
        // Navigate to the respective slide
        swiper.slideTo(index); 

        // Highlight active button
        expertiseNavs.forEach((nav) => nav.classList.remove('active'));
        nav.classList.add('active'); // Add active class to the clicked button
        
        // Re-enable loop after a short delay to ensure smooth slide transition
        setTimeout(() => {
          swiper.loopCreate(); // Re-enable loop
        }, 300); // Wait for 300ms (or match the transition duration)
    });
});

// Sync the active nav button with the Swiper active slide
swiper.on('slideChange', () => {
    const activeIndex = swiper.realIndex;
    expertiseNavs.forEach((nav, index) => {
        nav.classList.remove('active');
        if (index === activeIndex) {
            nav.classList.add('active');
        }
    });
});

// Set the initial active state for the first button
expertiseNavs[swiper.realIndex].classList.add('active');
// ============================================================ expertise slider ============================================================

//slick slider
$(".slick_slider").slick({
  speed: 1000,
  infinite: true,
  arrows: true,
  prevArrow: $('.prev-btn'),
  nextArrow: $('.next-btn'),
  // prevArrow: (`<button class="btn btn-sm rounded-circle border prev-btn"><i class="fas fa-chevron-left"></i></button>`),
  // nextArrow: (`<button class="btn btn-sm rounded-circle border next-btn"><i class="fas fa-chevron-right"></i></button>`),
  dots: false,
  autoplay: true,
  gap: 10,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


// Fancybox Js
jQuery(document).ready(function ($) {
  $(".image-popup-activation").fancybox();
  $(".video-popup-activation").fancybox();
});


// counter js
// $('.inner-counter').counterUp({
//   delay: 10,
//   time: 2000
// });

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})