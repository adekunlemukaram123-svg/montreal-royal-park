// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {

    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "80px";
        nav.style.right = "6%";
        nav.style.background = "#1c2a23";
        nav.style.padding = "25px";
        nav.style.gap = "20px";
    }

});


// ===============================
// TOUR BUTTONS
// ===============================

const tourButtons = document.querySelectorAll(".tour-card button");

tourButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Tour information will be available here soon."
        );

    });

});


// ===============================
// SIMPLE SCROLL EFFECT
// ===============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(17, 27, 22, 0.95)";
        navbar.style.position = "fixed";

    } else {

        navbar.style.background = "transparent";
        navbar.style.position = "absolute";

    }

});