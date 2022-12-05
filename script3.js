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
const ronPopeil = new Hireling("Ron Popeil", 200, 100, 20);
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
const hirelings = [timmy, bob, jennifer, ronPopeil, daleCarnegie];
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
let timeCount = 0;
let weather = ["sunny", "cloudy", "raining"];
let Temp = "40 to 100";
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
const chooseLocale = document.querySelector(".here");
const upgradeItemList = document.querySelector(".upgrade-items");
const playerStats = document.querySelector(".player-information");
const localePicture = document.querySelector(".picture");
const flavortext = document.querySelector(".flavor-text");
const staffList = document.querySelector(".staff-list");
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
                <img class="locale-pic" src="${localePics[currentLocaleIndex]}" alt="test" height="374vh" width="463vw">
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
  if (evt.target.classList.contains("here")) {
    populateLocalePicture();
  }
  populateLocales();
}
function populateLocalePicture() {
  localePicture.innerHTML = `
  <img class="current-location" src="${localePics[currentLocaleIndex]}" alt="Picture" height="370vh" width="500vw">
  `;
  flavortext.innerHTML = `${locales[currentLocaleIndex].info}`;
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
      populatePlayerStats();
    } else {
      alert("you don't have enough money for this");
    }
  }
  if (evt.target.classList.contains("ice-machine")) {
    if (player.money >= iceMachine.cost) {
      player.money -= iceMachine.cost;
      player.tools.push(iceMachine);
      populateTools();
      populatePlayerStats();
    } else {
      alert("you don't have enough money for this");
    }
  }
  if (evt.target.classList.contains("boombox")) {
    if (player.money >= boomBox.cost) {
      player.money -= boomBox.cost;
      player.tools.push(boomBox);
      populateTools();
      populatePlayerStats();
    } else {
      alert("you don't have enough money for this");
    }
  }
  if (evt.target.classList.contains("juicer")) {
    if (player.money >= juicer.cost) {
      player.money -= juicer.cost;
      player.tools.push(juicer);
      populateTools();
      populatePlayerStats();
    } else {
      alert("you don't have enough money for this");
    }
  }
  if (evt.target.classList.contains("cash-register")) {
    if (player.money >= cashRegister.cost) {
      player.money -= cashRegister.cost;
      player.tools.push(cashRegister);
      populateTools();
      populatePlayerStats();
    } else {
      alert("you don't have enough money for this");
    }
  }
  if (evt.target.classList.contains("fridge")) {
    if (player.money >= fridge.cost) {
      player.money -= fridge.cost;
      player.tools.push(fridge);
      populateTools();
      populatePlayerStats();
    } else {
      alert("you don't have enough money for this");
    }
  }
}
function populatePlayerStats() {
  playerStats.innerHTML = `
  <div class= "player-details">
  <h2>player</h2>
    <h4>Money: ${player.money}</h4>
  </div>
  <div>
    <h2>Inventory</h2>
      <ul class= "iventory-list">
        <li>Lemons: ${player.lemons} </li>
        <li>Sugar: ${player.sugar} </li>
        <li>Ice: ${player.ice} </li>
        <li>Cups: ${player.cups} </li>
      </ul>
  </div>
  <div> <h2>Tools: </h2>
    <ul>${player.tools
      .map((item) => {
        return `<li>
      ${item.name} </li>`;
      })
      .join("")}</ul>
  </div>
  <div> <h2>Staff: </h2>
    <ul>${player.staff
      .map((item) => {
        return `<li>
      ${item.name}</li>`;
      })
      .join("")}</ul>
    </div> 
    `;
}
function populateStaff() {
  //const hirelings = [timmy, bob, jennifer, RonPopeil, daleCarnegie];
  staffList.innerHTML = `
    <h2> Hire, review, and Fire staff memebers</h2>
    <ul>
        <li id="timmy"><button class=" timmy hire-btn">hire</button> ${hirelings[0].name}</li>
        <p>Cost to hire: ${hirelings[0].cost} PayRate: ${hirelings[0].payrate}</p> 
        <li id="bob"> <button class=" bob hire-btn">hire</button> ${hirelings[1].name} </li>
        <p>Cost to hire: ${hirelings[1].cost} PayRate: ${hirelings[1].payrate}</p> 
        <li id="jennifer"> <button class=" jennifer hire-btn">hire</button> ${hirelings[2].name} </li>
        <p>Cost to hire: ${hirelings[2].cost} PayRate: ${hirelings[2].payrate}</p> 
        <li id="ron-popeil"> <button class=" ron-popeil hire-btn">hire</button> ${hirelings[3].name} </li>
        <p>Cost to hire: ${hirelings[3].cost} PayRate: ${hirelings[3].payrate}</p> 
        <li id="dale-carnegie"> <button class="dale-carnegie hire-btn">hire</button> ${hirelings[4].name} </li>
        <p>Cost to hire: ${hirelings[4].cost} PayRate: ${hirelings[4].payrate}</p> 
        
      </ul>
  `;
  const hireBtns = document.querySelectorAll(".hire-btn");
  hireBtns.forEach((item) => {
    item.addEventListener("click", hireStaff);
  });
  player.staff.forEach((index) => {
    if (player.staff.includes(timmy)) {
      const timmyLi = document.querySelector("#timmy");
      timmyLi.innerHTML = `<button class = 'timmy fire-btn'>Fire</button> ${hirelings[0].name} `;
    }
    if (player.staff.includes(bob)) {
      const bobLi = document.querySelector("#bob");
      bobLi.innerHTML = ` <button class = ' bobfire-btn'>Fire</button> ${hirelings[1].name} `;
    }
    if (player.staff.includes(jennifer)) {
      const jenniferLi = document.querySelector("#jennifer");
      jenniferLi.innerHTML = ` <button class = 'jennifer fire-btn'>Fire</button> ${hirelings[2].name} `;
    }
    if (player.staff.includes(ronPopeil)) {
      const ronPopeLi = document.querySelector("#ron-popeil");
      ronPopeLi.innerHTML = ` <button class = ' ron-popeil fire-btn'>Fire</button> ${hirelings[3].name} `;
    }
    if (player.staff.includes(daleCarnegie)) {
      const daleCarnegieLi = document.querySelector("#dale-carnegie");
      daleCarnegieLi.innerHTML = ` <button class = ' dale-carnegie fire-btn'>Fire</button> ${hirelings[4].name} `;
    }
  });
  const fireBtns = document.querySelectorAll(".fire-btn");
  fireBtns.forEach((item) => {
    item.addEventListener("click", fireStaff);
  });
}
function hireStaff(evt) {
  if (evt.target.classList.contains("timmy")) {
    if (player.money >= timmy.cost) {
      player.money -= timmy.cost;
      player.staff.push(timmy);
      populateStaff();
      populatePlayerStats();
    } else {
      alert("you cannot afford to hire this person right now");
    }
  }
  if (evt.target.classList.contains("bob")) {
    if (player.money >= bob.cost) {
      player.money -= bob.cost;
      player.staff.push(bob);
      populateStaff();
      populatePlayerStats();
    } else {
      alert("you cannot afford to hire this person right now");
    }
  }
  if (evt.target.classList.contains("jennifer")) {
    if (player.money >= jennifer.cost) {
      player.money -= jennifer.cost;
      player.staff.push(jennifer);
      populateStaff();
      populatePlayerStats();
    } else {
      alert("you cannot afford to hire this person right now");
    }
  }
  if (evt.target.classList.contains("ron-popeil")) {
    if (player.money >= ronPopeil.cost) {
      player.money -= ronPopeil.cost;
      player.staff.push(ronPopeil);
      populateStaff();
      populatePlayerStats();
    } else {
      alert("you cannot afford to hire this person right now");
    }
  }
  if (evt.target.classList.contains("dale-carnegie")) {
    if (player.money >= daleCarnegie.cost) {
      player.money -= daleCarnegie.cost;
      player.staff.push(daleCarnegie);
      populateStaff();
      populatePlayerStats();
    } else {
      alert("you cannot afford to hire this person right now");
    }
  }
}
function fireStaff(evt) {
  if (evt.target.classList.contains("timmy")) {
    const firedStaff = player.staff.indexOf(timmy);
    player.staff.splice(firedStaff, 1);
    populateStaff();
    populatePlayerStats();
  }
  if (evt.target.classList.contains("bob")) {
    const firedStaff = player.staff.indexOf(bob);

    player.staff.splice(firedStaff, 1);
    populateStaff();
    populatePlayerStats();
  }
  if (evt.target.classList.contains("jennifer")) {
    const firedStaff = player.staff.indexOf(jennifer);
    player.staff.splice(firedStaff, 1);
    populateStaff();
    populatePlayerStats();
  }
  if (evt.target.classList.contains("ron-popeil")) {
    const firedStaff = player.staff.indexOf(ronPopeil);
    player.staff.splice(firedStaff, 1);
    populateStaff();
    populatePlayerStats();
  }
  if (evt.target.classList.contains("dale-carnegie")) {
    const firedStaff = player.staff.indexOf(daleCarnegie);
    player.staff.splice(firedStaff, 1);
    populateStaff();
    populatePlayerStats();
  }
}
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
  staff: [],
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
  populatePlayerStats();
  populateLocalePicture();
  populateStaff();
};
