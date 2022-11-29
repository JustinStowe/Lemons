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
/* =============================
FUNCTIONS
============================= */
function startGame() {
  console.log("button works");
  window.location = "playerscreen.html";
}
/* =============================
EVENT LISTENERS
============================= */
newGame.addEventListener("click", startGame);
