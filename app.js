"use strict";

// Footer Year

const footerContentElement = document.querySelector(".footer-content")
let date = new Date();
let year = date.getFullYear();
let footerContent = "&#169 " + year + " Andreas Schmidt"
footerContentElement.innerHTML = footerContent;

// Landing page

const landingPageDynamic = document.querySelector(".landing-page-dynamic")
let dynamicString = "Let's learn how to code together!"
// LandingPageDynamic.innerHTML = "";


