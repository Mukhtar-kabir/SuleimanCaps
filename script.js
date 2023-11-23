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