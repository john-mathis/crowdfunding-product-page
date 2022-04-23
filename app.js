"use strict";

// Global Selectors
const body = document.querySelector("body");
const menuOpen = document.querySelector(".open");
const menuClose = document.querySelector(".close");
const navbar = document.querySelector(".mobile__navbar");
const navLinks = document.querySelectorAll(".nav__links");
const ctaButton = document.querySelector(".cta__button");
const overlay = document.querySelector(".overlay");
const bookmarkContainer = document.querySelector(".bookmark__container");
const closePledge = document.querySelector(".close__pledge");
const pledgeContainer = document.querySelector(".pledge__container");
const cardButton = document.querySelectorAll(".card__button");
const pledgeAmountContainer = document.querySelector(
  ".pledge__amount__container"
);

// Pledge Fills
let firstFill = document.querySelector(".first__fill");
let secondFill = document.querySelector(".second__fill");
let thirdFill = document.querySelector(".third__fill");
let pledgeFills = [firstFill, secondFill, thirdFill];

// Pledge Cards
let firstPledge = document.querySelector(".first__pledge");
let secondPledge = document.querySelector(".second__pledge");
let thirdledge = document.querySelector(".third__pledge");
let pledgeCards = [firstPledge, secondPledge, thirdledge];

// Pledge Buttons
const pledgeButton = document.querySelector(".pledge__button");

// Success Container
const successContainer = document.querySelector(".success__container");
const successButton = document.querySelector(".success__button");

// Opens the mobile navigation bar
function openMenu() {
  menuOpen.style.display = "none";
  menuClose.style.display = "flex";
  navbar.style.maxWidth = "20rem";
  overlay.style.display = "block";
  navLinks.forEach((element) => (element.style.display = "flex"));
}

// Closes the mobile navigation bar
function closeMenu() {
  menuClose.style.display = "none";
  menuOpen.style.display = "flex";
  navbar.style.maxWidth = "0";
  overlay.style.display = "none";
  navLinks.forEach((element) => (element.style.display = "none"));
}

// While the navigation bar or pledge menu is open, if the the user clicks anywhere outside of it, close the menu.
document.addEventListener("click", (evt) => {
  let target = evt.target;
  if (target === overlay) {
    closeMenu();
    hidePledgeContainer();
  }
});

// Calling the functions once the user clicks on the appropriate elemnts.
menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

// Adds selected styles to the bookmark button when clicked

function toggleBookmark() {
  const bookmarkButton = document.querySelector(".bookmark__button");
  const bookmmarkImage = document.querySelector(".bookmark__img");
  bookmarkButton.textContent = "Bookmarked";
  bookmarkButton.style.color = "#147A73";
  bookmmarkImage.style.filter =
    "invert(36%) sepia(20%) saturate(1526%) hue-rotate(127deg) brightness(100%) contrast(91%)";
}

bookmarkContainer.addEventListener("click", toggleBookmark);

// Displays the pledge container
function showPledgeContainer() {
  pledgeContainer.style.display = "block";
  overlay.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Hides the pledge container
function hidePledgeContainer() {
  pledgeContainer.style.display = "none";
}

// Opens the pledge container if the user clicks on the related call to action buttons
ctaButton.addEventListener("click", showPledgeContainer);

// Closes the pledge container and removes the overlay once the close button is clicked.
closePledge.addEventListener("click", (evt) => {
  hidePledgeContainer();
  overlay.style.display = "none";
});

// If one of the call to action buttons are clicked, open the pledge menu.
cardButton.forEach((element) =>
  element.addEventListener("click", showPledgeContainer)
);

//When the user click on a card, add the selected styles to the card and remove it from the other cards.
document.addEventListener("click", (evt) => {
  for (let i = 0; i < pledgeCards.length; i++) {
    let target = evt.target;
    if (pledgeCards[i].contains(target)) {
      pledgeCards[i].classList.add("selected__card");
      pledgeAmountContainer.style.display = "block";
      pledgeCards[i].append(pledgeAmountContainer);
    } else if (target === closePledge || target === successButton) {
      pledgeAmountContainer.remove();
    } else {
      pledgeCards[i].classList.remove("selected__card");
    }

    // When the user clicks on the specified card, fill the corresponding pledge select.

    for (let i = 0; i < pledgeFills.length; i++) {
      if (pledgeCards[i].classList.contains("selected__card")) {
        pledgeFills[i].style.display = "flex";
      } else {
        pledgeFills[i].style.display = "none";
      }
    }

    for (let i = 0; i < pledgeFills.length; i++) {}
  }
});

//
pledgeButton.addEventListener("click", (evt) => {
  overlay.style.display = "block";
  successContainer.style.display = "block";
  hidePledgeContainer();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

successButton.addEventListener("click", (evt) => {
  overlay.style.display = "none";
  successContainer.style.display = "none";
});
