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
/* ==========modals===============*/
const statsModal = document.querySelector(".stats-modal");
const rentModal = document.querySelector(".rent-modal");
const upgradeModal = document.querySelector(".upgrades-modal");
const staffModal = document.querySelector(".staff-modal");
const marketingModal = document.querySelector(".marketing-modal");
const recipeModal = document.querySelector(".recipe-modal");
const suppliesModal = document.querySelector(".supplies-modal");
/* =============================
FUNCTIONS
============================= */
function toggleModals(e) {
  closeModals();
  if (e.target.classList.contains("stats")) {
    statsModal.classList.add("open-modal");
  }
  if (e.target.classList.contains("rent")) {
    rentModal.classList.add("open-modal");
  }
  if (e.target.classList.contains("upgrades")) {
    upgradeModal.classList.add("open-modal");
  }
  if (e.target.classList.contains("staff")) {
    staffModal.classList.add("open-modal");
  }
  if (e.target.classList.contains("marketing")) {
    marketingModal.classList.add("open-modal");
  }
  if (e.target.classList.contains("recipe")) {
    recipeModal.classList.add("open-modal");
  }
  if (e.target.classList.contains("supplies")) {
    suppliesModal.classList.add("open-modal");
  }
}
function closeModals() {
  statsModal.classList.remove("open-modal");
  rentModal.classList.remove("open-modal");
  upgradeModal.classList.remove("open-modal");
  staffModal.classList.remove("open-modal");
  marketingModal.classList.remove("open-modal");
  recipeModal.classList.remove("open-modal");
  suppliesModal.classList.remove("open-modal");
}
// function toggleStatsModal() {
//   // let modals = document.querySelectorAll(".modal");
//   // modals.forEach((element) => {
//   //   element.classList.remove("open-modal");
//   // });
//   stats.classList.toggle("open-modal");
// }
// function toggleRentModal() {
//   let modals = document.querySelectorAll(".modal");
//   modals.forEach((element) => {
//     element.classList.remove("open-modal");
//   });
//   rent.classList.toggle("open-modal");
// }
// function toggleUpgradesModal() {
//   let modals = document.querySelectorAll(".modal");
//   modals.forEach((element) => {
//     element.classList.remove("open-modal");
//   });
//   upgrades.classList.toggle("open-modal");
// }
// function toggleStaffModal() {
//   let modals = document.querySelectorAll(".modal");
//   modals.forEach((element) => {
//     element.classList.remove("open-modal");
//   });
//   staff.classList.toggle("open-modal");
// }
// function toggleMarketingModal() {
//   let modals = document.querySelectorAll(".modal");
//   modals.forEach((element) => {
//     element.classList.remove("open-modal");
//   });
//   marketing.classList.toggle("open-modal");
// }
// function toggleRecipeModal() {
//   let modals = document.querySelectorAll(".modal");
//   modals.forEach((element) => {
//     element.classList.remove("open-modal");
//   });
//   recipe.classList.toggle("open-modal");
// }
// function toggleSuppliesModal() {
//   let modals = document.querySelectorAll(".modal");
//   modals.forEach((element) => {
//     element.classList.remove("open-modal");
//   });
//   supplies.classList.toggle("open-modal");
// }
function saveMyGame() {}
/* =============================
EVENT LISTENERS
============================= */
stats.addEventListener("click", toggleModals);
rent.addEventListener("click", toggleModals);
upgrades.addEventListener("click", toggleModals);
staff.addEventListener("click", toggleModals);
marketing.addEventListener("click", toggleModals);
recipe.addEventListener("click", toggleModals);
supplies.addEventListener("click", toggleModals);
savegame.addEventListener("click", saveMyGame);
mainMenu.addEventListener("click", () => {
  document.location.href = "index2.html";
});
startDay.addEventListener("click", () => {
  document.location.href = "index4.html";
});
