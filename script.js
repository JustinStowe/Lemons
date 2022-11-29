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
const newGame = document.querySelector("#new-game");
const loadGame = document.querySelector("#load-save");
const closeGame = document.querySelector("#close");
const openGame = document.querySelector("#open");
/* =============================
FUNCTIONS
============================= */
function runGame() {
  window.location = "startscreen.html";
}
function startGame() {
  console.log("button works");
  window.location = "playerscreen.html";
}
function exitGame() {
  window.location = "index.html";
}
/* =============================
EVENT LISTENERS
============================= */
// openGame.addEventListener("click", runGame);
// newGame.addEventListener("click", startGame);
// closeGame.addEventListener("click", exitGame);
