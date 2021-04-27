const menu = document.querySelector(".menu");

const navItems = document.querySelector(".nav_list");

menu.addEventListener("click", () => {
  navItems.classList.toggle("show");
});
