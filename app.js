"use strict";

// Footer Year

const footerContentElement = document.querySelector(".footer-content");
let date = new Date();
let year = date.getFullYear();
let footerContent = "&#169 " + year + " Andreas Schmidt";
footerContentElement.innerHTML = footerContent;

// Landing page

const landingPageDynamic = document.querySelector(".landing-page-dynamic");
let dynamicString = "Let's learn how to code together!";
// LandingPageDynamic.innerHTML = "";

// Article Filters
const articleFilterProgrammingLanguage = document.querySelector(
    ".article-filter-programming-language"
);

articleFilterProgrammingLanguage.addEventListener("click", () => {
    articleFilterProgrammingLanguage.classList.toggle("expanded");
    if (articleFilterProgrammingLanguage.classList.contains("expanded")) {
        articleFilterProgrammingLanguage.innerHTML = `<img class="icon article-filter-icon" src="./img/icon-settings.png" alt="Settings icon"><p class="article-filter-option">HTML</p><p class="article-filter-option">CSS</p><p class="article-filter-option">JavaScript</p><p class="article-filter-option">Python</p>`;
        const articleFilterOptions = document.querySelectorAll(
            ".article-filter-option"
        );
        articleFilterOptions.forEach(articleFilterOption => {
            articleFilterOption.addEventListener("click", () => {
                articleFilterOption.classList.toggle(
                    "article-filter-option-selected"
                );
            });
        });
    } else {
        articleFilterProgrammingLanguage.innerHTML = `<img class="icon article-filter-icon" src="./img/icon-settings.png" alt="Settings icon"><p class="article-filter-title">Programming Languages</p>`;
    }
});
