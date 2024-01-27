// Set currentYear
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;


// Nav-mb
const btnNavEl = document.querySelector(".btn-mb-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {

        if (link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
    });
});

// Sticky-nav

const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
        document.body.classList.add("sticky");
    } else {
        document.body.classList.remove("sticky");
    }
}, {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
});

obs.observe(sectionHero);