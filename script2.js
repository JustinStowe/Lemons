console.log("connected");
/* =============================
CLASSES
============================= */

/* ======================
 GLOBAL VARS
=========================*/
let highestRevenueCompany;
let highestRevenueQuarter;
let highestRevenueRevenues;
let overallLifeSpanCompany;
let overallLifeDays;
let totalCupsSold;
let highestEarningCompany;
let highestEarningQuarter;
let highestEarningEarnings;
let overallBestDayCompany;
let overallBestDayCups;
let overallBestDayEarnings;
let overallBestDayTemp;

/* ======================
 DOM STUFF
=========================*/
const playModal = document.querySelector(".play-modal");
const howToModal = document.querySelector(".how2play");
const optionsModal = document.querySelector(".options");
/*=========Buttons====== */
const playBtn = document.querySelector(".play-btn");
const optionBtn = document.querySelector(".option-btn");
const howToPlay = document.querySelector(".how-to-btn");
const quitBtn = document.querySelector(".quit");
const newGameBtn = document.querySelector(".new-game");
const loadSave = document.querySelector(".load-save");
const developerMode = document.querySelector("#developer");

/* =============================
FUNCTIONS
============================= */
function togglePlayModal() {
  playModal.classList.toggle("modalOpen");
}
function toggleOptionsModal() {
  console.log("options selected");
  optionsModal.classList.toggle("modalOpen");
}
function toggleHowToModal() {
  howToModal.classList.toggle("modalOpen");
}
function quitGame() {
  document.location.href = "index.html";
}
function newGame() {
  localStorage.setItem("loadedSave", "");
  document.location.href = "index3.html";
}
function loadGame() {
  localStorage.setItem("loadedSave", "yes");
  document.location.href = "index3.html";
}
function displayStats() {
  highlights = JSON.parse(localStorage.getItem("bestGameStats"));
  console.log(highlights);
  // highestRevenueCompany= bestGameStats.
  // highestRevenueQuarter= bestGameStats.
  // highestRevenueRevenues= bestGameStats.
  // overallLifeSpanCompany= bestGameStats.
  // overallLifeDays= bestGameStats.
  // totalCupsSold= bestGameStats.totalCupsSold
  // highestEarningCompany= bestGameStats.
  // highestEarningQuarter= bestGameStats.
  // highestEarningEarnings= bestGameStats.
  // overallBestDayCompany= bestGameStats.
  // overallBestDayCups= bestGameStats.
  // overallBestDayEarnings= bestGameStats.
  // overallBestDayTemp= bestGameStats.
}

/* =============================
EVENT LISTENERS
============================= */
playBtn.addEventListener("click", togglePlayModal);
optionBtn.addEventListener("click", toggleOptionsModal);
howToPlay.addEventListener("click", toggleHowToModal);
quitBtn.addEventListener("click", quitGame);
newGameBtn.addEventListener("click", newGame);
loadSave.addEventListener("click", loadGame);
developerMode.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    localStorage.setItem("developer-mode", "yes");
  } else {
    localStorage.setItem("developer-mode", "");
  }
});
