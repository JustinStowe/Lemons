console.log("connected");
/* =============================
CLASSES
============================= */
class LemonStand {
  constructor(
    name,
    cost,
    lemonCapacity,
    sugarCapacity,
    iceCapacity,
    cupsCapacity,
    rep
  ) {
    this.name = name;
    this.cost = cost;
    this.lemonCapacity = lemonCapacity;
    this.sugarCapacity = sugarCapacity;
    this.iceCapacity = iceCapacity;
    this.cupsCapacity = cupsCapacity;
    this.rep = rep;
  }
  reputationBonus() {
    this.rep * 10;
  }
}
let woodenStand = new LemonStand("Wooden Stand", 0, 30, 30, 90, 50, 0);
let coolStand = new LemonStand("Cool stand", 299, 40, 40, 160, 75, 2);
let pavilion = new LemonStand("pavilion", 999, 60, 60, 230, 100, 3);
let lemonadeHouse = new LemonStand(
  "Lemonade House",
  2499,
  100,
  100,
  350,
  200,
  4
);
class Hireling {
  constructor(name, cost, payrate, bonuses) {
    this.name = name;
    this.cost = cost;
    this.payrate = payrate;
    this.bonuses = bonuses;
  }
  incomeBonus() {
    this.bonus * 1.8;
  }
}
class Tool {
  constructor(name, cost, bonus) {
    this.name = name;
    this.cost = cost;
    this.bonus = bonus;
  }
  toolBonus() {
    this.bonus * 1;
  }
}
class Locale {
  constructor(name, rent, info, people, popularity) {
    this.name = name;
    this.rent = rent;
    this.info = info;
    this.people = people;
    this.popularity = popularity;
  }
}
const umbrella = new Tool("umbrella", 99, 5);
const iceMachine = new Tool("ice-machine", 99, 1);
const boomBox = new Tool("Boom-Box", 149, 2);
const juicer = new Tool("juicer", 199, 10);
const cashRegister = new Tool("cash register", 350, 20);
const fridge = new Tool("fridge", 800, 1);
/* Class seperation */
const timmy = new Hireling("lil timmy", 0, 1, 0.5);
const bob = new Hireling("bob", 20, 10, 1);
const jennifer = new Hireling("Jennifer", 100, 50, 5);
const RonPopeil = new Hireling("Ron Popeil", 200, 100, 20);
const daleCarnegie = new Hireling("Dale Carnegie", 1000, 500, 100);
/* Class seperation */
const neighborhood = new Locale(
  "neighborhood",
  0,
  "In front of your parents house is the perfect place to start selling lemonade, and it will not cost a penny in rent.",
  10,
  1
);
const park = new Locale(
  "park",
  5,
  "A lemonade stand at the park? Great idea, many people play and exercise at the park and would enjoy relieving their thirst with lemonade. ",
  20,
  0
);
const downTown = new Locale(
  "down town",
  15,
  "There is always people and tourist down town bustling around and would appreciate refreshing lemonade ",
  40,
  0
);
const beach = new Locale(
  "beach",
  30,
  "What could be better than having fun at the beach  and being able to enjoy refreshing lemonade.",
  120,
  0
);
const hexaStadium = new Locale(
  "The Hexa-Stadium",
  100,
  "You better bring your A-game to the game, the masses of fans will want something to wash down those hotdogs",
  800,
  0
);
/* ======================
 GLOBAL VARS
=========================*/

const lemonadeStands = [woodenStand, coolStand, pavilion, lemonadeHouse];
const hirelings = [timmy, bob, jennifer, RonPopeil, daleCarnegie];
const tools = [umbrella, iceMachine, boomBox, juicer, cashRegister, fridge];
const locales = [neighborhood, park, downTown, beach, hexaStadium];
const localePics = [
  "images/neighborhood.png",
  "images/park.png",
  "images/downTown.png",
  "images/beach.png",
  "images/hexastadium.png",
];
let currentLocaleIndex = 0;
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
const localeInfo = document.querySelector(".locales");
const nextLocale = document.querySelector(".next-locale");
const prevLocale = document.querySelector(".prev-locale");
const chooseLocale = document.querySelector(".this-locale");
const upgradeItemList = document.querySelector(".upgrade-items");
const playerStats = document.querySelector(".player-information");
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
function populateLocales() {
  localeInfo.innerHTML = `
  <h2>choose where you want to set up your stand and how much it will cost you.</h2>
                <img class="locale-pic" src="${localePics[currentLocaleIndex]}" alt="test" height="374px" width="463px">
          <h3>${locales[currentLocaleIndex].name}</h3>
          <p>${locales[currentLocaleIndex].info}</p>
          <h4>costs: ${locales[currentLocaleIndex].rent} daily
  `;
}
function localeBtns(evt) {
  if (evt.target.classList.contains("next-locale")) {
    if (currentLocaleIndex < localePics.length - 1) {
      currentLocaleIndex += 1;
    } else {
      currentLocaleIndex = 0;
    }
  }
  if (evt.target.classList.contains("prev-locale")) {
    if (currentLocaleIndex === 0) {
      currentLocaleIndex = localePics.length - 1;
    } else {
      currentLocaleIndex -= 1;
    }
  }
  if (evt.target.classList.contains(".this-locale")) {
    rentModal.classList.remove("open-modal");
  }
  populateLocales();
}
function populateTools() {
  upgradeItemList.innerHTML = `
    <li id="umbrella"><button class="umbrella button">Buy</button><img src="" alt=""> Umbrella Cost: 99</li>
      <p>customers are more likely to stop to buy lemonade</p>
    <li id="ice-machine"><button class = "ice-machine button">Buy</button><img src="" alt=""> Ice machine Cost: 99</li>
      <p>automatically give you 100 ice to start each day</p>
    <li id="boom-box"><button class="boombox button">Buy</button><img src="" alt=""> BoomBox Cost: 149</li>
      <p>Attracts more potential customers to you lemonade stand</p>
    <li id="juicer"><button class="juicer button">Buy</button><img src="" alt=""> Juicer Cost: 199</li>
      <p>reduces the time it takes to make another pitcher of lemonade</p>
    <li id="cash-register"><button class="cash-register button">Buy</button><img src="" alt=""> cash Register Cost: 350</li>
      <p>reduces the time it takes to complete a transaction</p>
    <li id="fridge"><button class="fridge button">Buy</button><img src="" alt=""> Fridge Cost: 800</li>
      <p>keeps ice from melting and keeps your lemons from spoiling. </p>
  `;

  player.tools.forEach((index) => {
    if (player.tools.includes(umbrella)) {
      const umbrellaLi = document.querySelector("#umbrella");
      umbrellaLi.innerHTML = `<span>OWNED</span><img src="" alt=""> Umbrella Cost: 99`;
    }
    if (player.tools.includes(iceMachine)) {
      const iceMachineLi = document.querySelector("#ice-machine");
      iceMachineLi.innerHTML = `<span>OWNED</span><img src="" alt=""> Ice machine Cost: 99`;
    }
    if (player.tools.includes(boomBox)) {
      const boomBoxLi = document.querySelector("#boom-box");
      boomBoxLi.innerHTML = `<span>OWNED</span><img src="" alt=""> BoomBox Cost: 149`;
    }
    if (player.tools.includes(juicer)) {
      const juicerLi = document.querySelector("#juicer");
      juicerLi.innerHTML = `<span>OWNED</span><img src="" alt=""> Juicer Cost: 199`;
    }
    if (player.tools.includes(cashRegister)) {
      const cashRegisterLi = document.querySelector("#cash-register");
      cashRegisterLi.innerHTML = `<span>OWNED</span><img src="" alt=""> cash Register Cost: 350`;
    }
    if (player.tools.includes(fridge)) {
      const fridgeLi = document.querySelector("#fridge");
      fridgeLi.innerHTML = `<span>OWNED</span><img src="" alt=""> Fridge Cost: 800`;
    }
  });
  const toolBuyBtns = document
    .querySelector(".upgrade-items")
    .querySelectorAll(".button");
  toolBuyBtns.forEach((item) => {
    item.addEventListener("click", buyTools);
  });
}
function buyTools(evt) {
  if (evt.target.classList.contains("umbrella")) {
    if (player.money >= umbrella.cost) {
      player.money -= umbrella.cost;
      player.tools.push(umbrella);
      populateTools();
    } else {
      alert("you don't have enough money for this");
    }
  }
  if (evt.target.classList.contains("ice-machine")) {
    if (player.money >= iceMachine.cost) {
      player.money -= iceMachine.cost;
      player.tools.push(iceMachine);
      populateTools();
    } else {
      alert("you don't have enough money for this");
    }
  }
  if (evt.target.classList.contains("boombox")) {
    if (player.money >= boomBox.cost) {
      player.money -= boomBox.cost;
      player.tools.push(boomBox);
      populateTools();
    } else {
      alert("you don't have enough money for this");
    }
  }
  if (evt.target.classList.contains("juicer")) {
    if (player.money >= juicer.cost) {
      player.money -= juicer.cost;
      player.tools.push(juicer);
      populateTools();
    } else {
      alert("you don't have enough money for this");
    }
  }
  if (evt.target.classList.contains("cash-register")) {
    if (player.money >= cashRegister.cost) {
      player.money -= cashRegister.cost;
      player.tools.push(cashRegister);
      populateTools();
    } else {
      alert("you don't have enough money for this");
    }
  }
  if (evt.target.classList.contains("fridge")) {
    if (player.money >= fridge.cost) {
      player.money -= fridge.cost;
      player.tools.push(fridge);
      populateTools();
    } else {
      alert("you don't have enough money for this");
    }
  }
}
function populatePlayerStats() {}
function saveMyGame() {}
/* =============================
PLAYER
============================= */
const player = {
  money: 20,
  locale: locales[currentLocaleIndex],
  lemons: 0,
  sugar: 0,
  cups: 0,
  ice: 0,
  tools: [],
};
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
nextLocale.addEventListener("click", localeBtns);
prevLocale.addEventListener("click", localeBtns);
chooseLocale.addEventListener("click", localeBtns);
mainMenu.addEventListener("click", () => {
  document.location.href = "index2.html";
});
startDay.addEventListener("click", () => {
  document.location.href = "index4.html";
});
window.onload = () => {
  populateLocales();
  populateTools();
};
