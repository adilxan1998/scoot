const elHamburgerBtn = document.querySelector(".header__hamburger-btn")

const elHeader = document.querySelector("header")

elHamburgerBtn.addEventListener("click", () => {
  elHeader.classList.toggle("header--open")
})