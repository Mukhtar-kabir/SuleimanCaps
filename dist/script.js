"use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav");
const tab = document.querySelector(".nav__links");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlay.classList.toggle("hidden");
});

document.querySelectorAll(".link").forEach((el) => {
  el.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.add("hidden");
  });
});

overlay.addEventListener("click", function () {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  overlay.classList.add("hidden");
});

const link = document.querySelectorAll(".link");

const changeActiveItem = () => {
  link.forEach((el) => {
    el.classList.remove("active");
  });
};

link.forEach((el) => {
  el.addEventListener("click", () => {
    changeActiveItem();
    el.classList.add("active");
  });
});

const header = document.getElementById("myHeader");
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = function () {
  myFunction();
};

// Toggling each project
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav__link");
  const projectItems = document.querySelectorAll(".products-items > div");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the target data attribute
      const target = this.getAttribute("data-tab");

      // Hide all project items
      projectItems.forEach(function (item) {
        item.style.display = "none";
      });

      // Show the target project item
      document.querySelector(`.products-items--${target}`).style.display = "";

      // Remove 'active' class from all links
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });

      // Add 'active' class to the clicked link
      this.classList.add("active");
    });
  });

  // Initially, make the first link active
  navLinks[0].click();
});

const btnUp = document.querySelector(".btn--up");

function toggleBtnVisibility() {
  if (window.scrollY > 100) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
}

window.addEventListener("scroll", toggleBtnVisibility);

btnUp.addEventListener("click", function (e) {
  e.preventDefault();

  window.scrollTo({
    left: header.left + window.pageXOffset,
    top: header.bottom + window.pageYOffset,
    behavior: "smooth",
  });
});

btnUp.style.display = "none";

$(document).ready(function () {
  "use strict";
  // $(".owl-carousel").owlCarousel();

  $("#featured").owlCarousel({
    items: 15,
    loop: true,
    smartSpeed: 800,
    autoplay: true,
    navText: [
      "<div class='nav-button owl-prev'>‹</div>",
      "<div class='nav-button owl-next'>›</div>",
    ],
    dots: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      415: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1200: {
        items: 5,
      },
    },
  });
});
