/* Created by Tivotal */

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};





window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};







var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 2000,  // Set to 3 seconds, adjust as needed
        disableOnInteraction: false,
    }
});

var swiper = new Swiper(".review-slider", {
  SpaceBetween: 10,
  grabCursor: true,
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
      delay: 3000,  // Set to 3 seconds, adjust as needed
      disableOnInteraction: false,
  }
});
