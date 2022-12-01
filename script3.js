console.log("connected");
/* =============================
CLASSES
============================= */

/* ======================
 GLOBAL VARS
=========================*/

/* ======================
 DOM STUFF
=========================*/
const stats = document.querySelector(".stats");
const rent = document.querySelector(".rent");
const upgrades = document.querySelector(".upgrades");
const staff = document.querySelector(".staff");
const marketing = document.querySelector(".marketing");
const recipe = document.querySelector(".recipe");
const supplies = document.querySelector(".supplies");
const savegame = document.querySelector(".save-game");
const mainMenu = document.querySelector(".main-menu");
const startDay = document.querySelector(".start-day");
/* =============================S
FUNCTIONS
============================= */
function toggleStatsModal() {
  let modals = document.querySelectorAll(".modal");
  modals.forEach((element) => {
    element.classList.remove("open-modal");
  });
  stats.classList.toggle("open-modal");
}
function toggleRentModal() {
  let modals = document.querySelectorAll(".modal");
  modals.forEach((element) => {
    element.classList.remove("open-modal");
  });
  rent.classList.toggle("open-modal");
}
function toggleUpgradesModal() {
  let modals = document.querySelectorAll(".modal");
  modals.forEach((element) => {
    element.classList.remove("open-modal");
  });
  upgrades.classList.toggle("open-modal");
}
function toggleStaffModal() {
  let modals = document.querySelectorAll(".modal");
  modals.forEach((element) => {
    element.classList.remove("open-modal");
  });
  staff.classList.toggle("open-modal");
}
function toggleMarketingModal() {
  let modals = document.querySelectorAll(".modal");
  modals.forEach((element) => {
    element.classList.remove("open-modal");
  });
  marketing.classList.toggle("open-modal");
}
function toggleRecipeModal() {
  let modals = document.querySelectorAll(".modal");
  modals.forEach((element) => {
    element.classList.remove("open-modal");
  });
  recipe.classList.toggle("open-modal");
}
function toggleSuppliesModal() {
  let modals = document.querySelectorAll(".modal");
  modals.forEach((element) => {
    element.classList.remove("open-modal");
  });
  supplies.classList.toggle("open-modal");
}
function saveMyGame() {}
/* =============================
EVENT LISTENERS
============================= */
stats.addEventListener("click", toggleStatsModal);
rent.addEventListener("click", toggleRentModal);
upgrades.addEventListener("click", toggleUpgradesModal);
staff.addEventListener("click", toggleStaffModal);
marketing.addEventListener("click", toggleMarketingModal);
recipe.addEventListener("click", toggleRecipeModal);
supplies.addEventListener("click", toggleSuppliesModal);
savegame.addEventListener("click", saveMyGame);
mainMenu.addEventListener("click", () => {
  document.location.href = "index2.html";
});
startDay.addEventListener("click", () => {
  document.location.href = "index4.html";
});
