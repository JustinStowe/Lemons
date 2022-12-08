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
const timmy = new Hireling("lil timmy", 0, 1, 0.5);
const bob = new Hireling("bob", 20, 10, 1);
const jennifer = new Hireling("Jennifer", 100, 50, 5);
const ronPopeil = new Hireling("Ron Popeil", 200, 100, 20);
const daleCarnegie = new Hireling("Dale Carnegie", 1000, 500, 100);
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
const umbrella = new Tool("umbrella", 99, 5);
const iceMachine = new Tool("ice-machine", 99, 1);
const boomBox = new Tool("Boom-Box", 149, 2);
const juicer = new Tool("juicer", 199, 10);
const cashRegister = new Tool("cash register", 350, 20);
const fridge = new Tool("fridge", 800, 1);
class Locale {
  constructor(name, rent, info, people, popularity) {
    this.name = name;
    this.rent = rent;
    this.info = info;
    this.people = people;
    this.popularity = popularity;
  }
}
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
class MarketingMethod {
  constructor(name, cost, bonus) {
    this.name = name;
    this.cost = cost;
    this.bonus = bonus;
  }
}
const flyer = new MarketingMethod("flyer", 1, 1);
const socialMedia = new MarketingMethod("social media", 5, 2);
const newspaper = new MarketingMethod("newspaper", 5, 2);
const radio = new MarketingMethod("radio", 10, 3);
const tv = new MarketingMethod("TV", 20, 4);
/* ======================
 GLOBAL VARS
=========================*/

const lemonadeStands = [woodenStand, coolStand, pavilion, lemonadeHouse];
const hirelings = [timmy, bob, jennifer, ronPopeil, daleCarnegie];
const tools = [umbrella, iceMachine, boomBox, juicer, cashRegister, fridge];
const locales = [neighborhood, park, downTown, beach, hexaStadium];
const marketingTactics = [flyer, socialMedia, newspaper, radio, tv];
const localePics = [
  "images/neighborhood.png",
  "images/park.png",
  "images/downTown.png",
  "images/beach.png",
  "images/hexastadium.png",
];
let cupPrice = 0;
let storeLemons = 0;
let storeSugar = 0;
let storeCups = 0;
let storeIce = 0;
let recipeLemons = 0;
let recipeSugar = 0;
let recipeIce = 0;
let currentLocaleIndex = 0;
let suppliesTotalCost = 0;
let currentDay = 0;
let currentMonth = 0;
let currentYear = 0;
let currentWeather;
let currentTemp; //40 - 100//
let weather = ["sunny", "cloudy", "raining"];
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
const recipeLemonCount = document.querySelector("#recipe-lemons");
const recipeSugarCount = document.querySelector("#recipe-sugar");
const recipeIceCount = document.querySelector("#recipe-ice");
const minusLemons = document.querySelector(".minus-lemons");
const addLemons = document.querySelector(".add-lemons");
const minusSugar = document.querySelector(".minus-sugar");
const addSugar = document.querySelector(".add-sugar");
const minusIce = document.querySelector(".minus-ice");
const addIce = document.querySelector(".add-ice");
const lemonCart = document.querySelector(".lemon-supplies");
const sugarCart = document.querySelector(".sugar-supplies");
const cupCart = document.querySelector(".cup-supplies");
const iceCart = document.querySelector(".ice-supplies");
const minusLemonsSupplies = document.querySelector("#minus-lemons");
const addLemonsSupplies = document.querySelector("#add-lemons");
const minusSugarSupplies = document.querySelector("#minus-sugar");
const addSugarSupplies = document.querySelector("#add-sugar");
const minusCupsSupplies = document.querySelector("#minus-cups");
const addCupsSupplies = document.querySelector("#add-cups");
const minusIceSupplies = document.querySelector("#minus-ice");
const addIceSupplies = document.querySelector("#add-ice");
const suppliesTotal = document.querySelector("#supplies-totalCost");
const checkOutSupplies = document.querySelector("#buy-goods");
const cancelShopping = document.querySelector("#cancel-buy");
const lemonStandList = document.querySelector(".lemon-stands");
const yearNum = document.querySelector("#year");
const monthNum = document.querySelector("#month");
const dayNum = document.querySelector("#day");
const tempNum = document.querySelector("#temp");
const weatherDisplay = document.querySelector("#weather");
const minusPrice = document.querySelector("#price-down");
const addPrice = document.querySelector("#price-up");
const pricePerCup = document.querySelector("#cup-price");
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
function keepTime() {
  currentDay = +1;

  if (currentDay === 31) {
    currentDay = 0;
    currentMonth += 1;
  }
  dayNum.innerHTML = `${currentDay}`;
  if (currentMonth === 13) {
    currentMonth = 0;
    currentYear += 1;
  }
  monthNum.innerHTML = `${currentMonth}`;
  yearNum.innerHTML = `${currentYear}`;
}
function randomWeather() {
  let i = Math.floor(Math.random() * 3);
  console.log(i);
  currentWeather = weather[i];
  weatherDisplay.innerHTML = `${currentWeather}`;
  let currentTemp = Math.floor(Math.random() * 100 - 40) + 40;

  tempNum.innerHTML = `${currentTemp}`;
}
function BeginDay() {
  localStorage.setItem("player-data", JSON.stringify(player));
  saveSettings();
  localStorage.setItem("globalSettings", JSON.stringify(gameSettings));
  document.location.href = "index4.html";
}

/* =============================
 POPULATE FUNCTIONS
============================= */
function populateLocales() {
  localeInfo.innerHTML = `
  <h2>choose where you want to set up your stand and how much it will cost you.</h2>
                <img class="locale-pic" src="${localePics[currentLocaleIndex]}" alt="test" height="374vh" width="463vw">
          <h3>${locales[currentLocaleIndex].name}</h3>
          <p>${locales[currentLocaleIndex].info}</p>
          <h4>costs: ${locales[currentLocaleIndex].rent} daily
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
function populateLocalePicture() {
  localePicture.innerHTML = `
  <h2>${locales[currentLocaleIndex].name}</h2>
  <img class="current-location" src="${localePics[currentLocaleIndex]}" alt="Picture" height="370vh" width="500vw">
  `;
  flavortext.innerHTML = `${locales[currentLocaleIndex].info}`;
}
function populatePlayerStats() {
  playerStats.innerHTML = `
  <div class= "player-details">
  <h2>player</h2>
    <h4>Money: ${player.money.toFixed(2)}</h4>
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
  lemonStandList.innerHTML = `
  <li id= "woodenStand"> ${lemonadeStands[0].name} costs: ${lemonadeStands[0].cost} Capacities: Lemons: ${lemonadeStands[0].lemonCapacity} Sugar:${lemonadeStands[0].sugarCapacity} Ice: ${lemonadeStands[0].iceCapacity} Cups:${lemonadeStands[0].cupsCapacity} <button class=" woodenStand button">buy<button> </li>

  <li id="coolStand"> ${lemonadeStands[1].name} costs: ${lemonadeStands[1].cost} Capacities: Lemons: ${lemonadeStands[1].lemonCapacity} Sugar:${lemonadeStands[1].sugarCapacity} Ice: ${lemonadeStands[1].iceCapacity} Cups:${lemonadeStands[1].cupsCapacity} <button class="coolStand button">buy<button> </li>
  
  <li id="pavilion"> ${lemonadeStands[2].name} costs: ${lemonadeStands[2].cost} Capacities: Lemons: ${lemonadeStands[2].lemonCapacity} Sugar:${lemonadeStands[2].sugarCapacity} Ice: ${lemonadeStands[2].iceCapacity} Cups:${lemonadeStands[2].cupsCapacity} <button class="pavilion button">buy<button> </li>
  <li id="lemonadeHouse"> ${lemonadeStands[3].name} costs: ${lemonadeStands[3].cost} Capacities: Lemons: ${lemonadeStands[3].lemonCapacity} Sugar:${lemonadeStands[3].sugarCapacity} Ice: ${lemonadeStands[3].iceCapacity} Cups:${lemonadeStands[3].cupsCapacity} <button class="lemonadeHouse button">buy<button> </li>
  `;
  for (let i = 0; i < lemonadeStands.length; i++) {
    if (player.LemonStand === woodenStand) {
      const woodenStandLi = document.querySelector("#woodenStand");
      woodenStandLi.innerHTML = `${lemonadeStands[0].name} costs: ${lemonadeStands[0].cost} Capacities: Lemons: ${lemonadeStands[0].lemonCapacity} Sugar:${lemonadeStands[0].sugarCapacity} Ice: ${lemonadeStands[0].iceCapacity} Cups:${lemonadeStands[0].cupsCapacity} <span>Currently owned</span> `;
    }
    if (player.LemonStand === coolStand) {
      const coolStandLi = document.querySelector("#coolStand");
      coolStandLi.innerHTML = `${lemonadeStands[1].name} costs: ${lemonadeStands[1].cost} Capacities: Lemons: ${lemonadeStands[1].lemonCapacity} Sugar:${lemonadeStands[1].sugarCapacity} Ice: ${lemonadeStands[1].iceCapacity} Cups:${lemonadeStands[1].cupsCapacity} <span>Currently owned</span> `;
    }
    if (player.LemonStand === pavilion) {
      const pavilionLi = document.querySelector("#pavilion");
      pavilionLi.innerHTML = `${lemonadeStands[2].name} costs: ${lemonadeStands[2].cost} Capacities: Lemons: ${lemonadeStands[2].lemonCapacity} Sugar:${lemonadeStands[2].sugarCapacity} Ice: ${lemonadeStands[2].iceCapacity} Cups:${lemonadeStands[2].cupsCapacity} <span>Currently owned</span> 
      `;
    }
    if (player.LemonStand === lemonadeHouse) {
      const lemonadeHouseLi = document.querySelector("#lemonadeHouse");
      lemonadeHouseLi.innerHTML = `${lemonadeStands[3].name} costs: ${lemonadeStands[3].cost} Capacities: Lemons: ${lemonadeStands[3].lemonCapacity} Sugar:${lemonadeStands[3].sugarCapacity} Ice: ${lemonadeStands[3].iceCapacity} Cups:${lemonadeStands[3].cupsCapacity} <span>Currently owned</span> `;
    }
  }
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
  const toolBuyBtns = document.querySelectorAll(".button");
  toolBuyBtns.forEach((item) => {
    item.addEventListener("click", buyTools);
  });
}
function populateMarketing() {
  marketingModal.innerHTML = `
  <h2>Choose your marketing tactics</h2>
            <ul class="pr-tactics">
                <li id= 'flyer'><img src="" alt="">flyer<button class='flyer market-buy'>Buy</button></li>
                <p>Costs: $1.00</p>
                <li id= 'social-media'><img src="" alt="">social media<button class= 'social-media market-buy'>Buy</button></li>
                <p>Costs: $5.00</p>
                <li id= 'newspaper'><img src="" alt="">newspaper<button class= 'newspaper market-buy'>Buy</button></li>
                <p>Costs: $5.00</p>
                <li id= 'radio'><img src="" alt="">radio<button class= 'radio market-buy'>Buy</button></li>
                <p>Costs: $10.00</p>
                <li id= 'tv'><img src="" alt="">TV<button class= 'tv market-buy'>Buy</button></li>
                <p>Costs: $20.00</p>
            </ul>
  `;
  const marketingBtn = document.querySelectorAll(".market-buy");
  marketingBtn.forEach((item) => {
    item.addEventListener("click", buyMarketing);
  });
  player.marketing.forEach((index) => {
    if (player.marketing.includes(flyer)) {
      const flyerLi = document.querySelector("#flyer");
      flyerLi.innerHTML = ` <img src="" alt="">flyer<span>Bought</span>`;
    }
    if (player.marketing.includes(socialMedia)) {
      const socialMediaLi = document.querySelector("#social-media");
      socialMediaLi.innerHTML = `<img src="" alt="">social media<span>Bought</span>`;
    }
    if (player.marketing.includes(newspaper)) {
      const newspaperLi = document.querySelector("#newspaper");
      newspaperLi.innerHTML = `<img src="" alt="">newspaper<span>Bought</span>`;
    }
    if (player.marketing.includes(radio)) {
      const radioLi = document.querySelector("#radio");
      radioLi.innerHTML = `<img src="" alt="">radio<span>Bought</span>`;
    }
    if (player.marketing.includes(tv)) {
      const tvLi = document.querySelector("#tv");
      tvLi.innerHTML = `<img src="" alt="">TV<span>Bought</span>`;
    }
  });
}
function populateRecipe() {
  recipeLemonCount.innerText = `${recipeLemons}`;
  recipeSugarCount.innerText = `${recipeSugar}`;
  recipeIceCount.innerText = `${recipeIce}`;
  pricePerCup.innerText = `${cupPrice.toFixed(2)}`;
}
function populateSupplies() {
  lemonCart.innerText = `${storeLemons}`;
  sugarCart.innerText = `${storeSugar}`;
  cupCart.innerText = `${storeCups}`;
  iceCart.innerText = `${storeIce}`;
  suppliesTotal.innerText = `${suppliesTotalCost.toFixed(2)}`;
}
function saveSettings() {
  gameSettings.lemonRecipe = recipeLemons;
  gameSettings.sugarRecipe = recipeSugar;
  gameSettings.iceRecipe = recipeIce;
  gameSettings.cupCharge = cupPrice;
  gameSettings.day = currentDay;
  gameSettings.month = currentMonth;
  gameSettings.year = currentYear;
  gameSettings.weather = currentWeather;
  gameSettings.temp = currentTemp;
  gameSettings.locale = currentLocaleIndex;
}
/* =============================
BUTTON FUNCTIONS
============================= */
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
  if (evt.target.classList.contains("woodenStand"))
    if (player.money >= woodenStand.cost) {
      player.money -= woodenStand.cost;
      player.LemonStand = woodenStand;
      populateTools();
      populatePlayerStats();
    } else {
      alert("you don't have enough money for this");
    }
  if (evt.target.classList.contains("coolStand"))
    if (player.money >= coolStand.cost) {
      player.money -= coolStand.cost;
      player.LemonStand = coolStand;
      populateTools();
      populatePlayerStats();
    } else {
      alert("you don't have enough money for this");
    }
  if (evt.target.classList.contains("pavilion"))
    if (player.money >= pavilion.cost) {
      player.money -= pavilion.cost;
      player.LemonStand = pavilion;
      populateTools();
      populatePlayerStats();
    } else {
      alert("you don't have enough money for this");
    }
  if (evt.target.classList.contains("lemonadeHouse"))
    if (player.money >= lemonadeHouse.cost) {
      player.money -= lemonadeHouse.cost;
      player.LemonStand = lemonadeHouse;
      populateTools();
      populatePlayerStats();
    } else {
      alert("you don't have enough money for this");
    }
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
function buyMarketing(evt) {
  if (evt.target.classList.contains("flyer")) {
    if (player.money >= flyer.cost) {
      player.money -= flyer.cost;
      player.marketing.push(flyer);
      populateMarketing();
      populatePlayerStats();
    } else {
      alert("you cannot afford this");
    }
  }
  if (evt.target.classList.contains("social-media")) {
    if (player.money >= socialMedia.cost) {
      player.money -= socialMedia.cost;
      player.marketing.push(socialMedia);
      populateMarketing();
      populatePlayerStats();
    } else {
      alert("you cannot afford this");
    }
  }
  if (evt.target.classList.contains("newspaper")) {
    if (player.money >= newspaper.cost) {
      player.money -= newspaper.cost;
      player.marketing.push(newspaper);
      populateMarketing();
      populatePlayerStats();
    } else {
      alert("you cannot afford this");
    }
  }
  if (evt.target.classList.contains("radio")) {
    if (player.money >= radio.cost) {
      player.money -= radio.cost;
      player.marketing.push(radio);
      populateMarketing();
      populatePlayerStats();
    } else {
      alert("you cannot afford this");
    }
  }
  if (evt.target.classList.contains("tv")) {
    if (player.money >= tv.cost) {
      player.money -= tv.cost;
      player.marketing.push(tv);
      populateMarketing();
      populatePlayerStats();
    } else {
      alert("you cannot afford this");
    }
  }
}
function recipeButtons(evt) {
  if (evt.target === minusLemons) {
    if (recipeLemons >= 1) {
      recipeLemons -= 1;
      console.log(recipeLemons);
      populateRecipe();
    }
  }
  if (evt.target === addLemons) {
    recipeLemons += 1;
    console.log(recipeLemons);
    populateRecipe();
  }
  if (evt.target === minusSugar) {
    if (recipeSugar >= 1) {
      recipeSugar -= 1;
      console.log(recipeSugar);
      populateRecipe();
    }
  }
  if (evt.target === addSugar) {
    recipeSugar += 1;
    console.log(recipeSugar);
    populateRecipe();
  }
  if (evt.target === minusIce) {
    if (recipeIce >= 1) {
      recipeIce -= 1;
      console.log(recipeIce);
      populateRecipe();
    }
  }
  if (evt.target === addIce) {
    recipeIce += 1;
    console.log(recipeIce);
    populateRecipe();
  }
  if (evt.target === minusPrice) {
    if (cupPrice >= 0.1) {
      cupPrice -= 0.1;
      populateRecipe();
    }
  }
  if (evt.target === addPrice) {
    cupPrice += 0.1;
    populateRecipe();
  }
}
function buySupplies(evt) {
  if (evt.target === minusLemonsSupplies) {
    if (storeLemons >= 1) {
      if (suppliesTotalCost >= 0.5) {
        storeLemons -= 1;
        suppliesTotalCost -= 0.5;
        populateSupplies();
      }
    }
  }

  if (evt.target === addLemonsSupplies) {
    if (player.LemonStand.lemonCapacity > player.lemons + storeLemons) {
      storeLemons += 1;
      suppliesTotalCost += 0.5;
      populateSupplies();
    } else {
      alert("you don't have enough lemon capacity");
    }
  }
  if (evt.target === minusSugarSupplies) {
    if (storeSugar >= 1) {
      if (suppliesTotalCost >= 0.34) {
        storeSugar -= 1;
        suppliesTotalCost -= 0.34;
        populateSupplies();
      }
    }
  }

  if (evt.target === addSugarSupplies) {
    if (player.LemonStand.sugarCapacity > player.sugar + storeSugar) {
      storeSugar += 1;
      suppliesTotalCost += 0.34;
      populateSupplies();
    } else {
      alert("you don't have enough sugar capacity");
    }
  }

  if (evt.target === minusCupsSupplies) {
    if (storeCups >= 1) {
      if (suppliesTotalCost >= 0.08) {
        storeCups -= 1;
        populateSupplies();
      }
    }
  }

  if (evt.target === addCupsSupplies) {
    if (player.LemonStand.cupsCapacity > player.cups + storeCups) {
      storeCups += 1;
      suppliesTotalCost += 0.08;
      populateSupplies();
    } else {
      alert("you don't have enough cup capacity");
    }
  }

  if (evt.target === minusIceSupplies) {
    if (storeIce >= 1) {
      if (suppliesTotalCost >= 0.07) {
        storeIce -= 1;
        suppliesTotalCost -= 0.07;
        populateSupplies();
      }
    }
  }

  if (evt.target === addIceSupplies) {
    if (player.LemonStand.iceCapacity > player.ice + storeIce) {
      storeIce += 1;
      suppliesTotalCost += 0.07;
      populateSupplies();
    } else {
      alert("you don't have enough ice capacity");
    }
  }
  if (evt.target === checkOutSupplies) {
    if (player.money >= suppliesTotalCost) {
      player.money -= suppliesTotalCost.toFixed(2);
      player.lemons += storeLemons;
      player.sugar += storeSugar;
      player.cups += storeCups;
      player.ice += storeIce;
      storeIce = 0;
      storeCups = 0;
      storeSugar = 0;
      storeLemons = 0;
      suppliesTotalCost = 0;
      populatePlayerStats();
      populateSupplies();
    }
  }
  if (evt.target === cancelShopping) {
    storeIce = 0;
    storeCups = 0;
    storeSugar = 0;
    storeLemons = 0;
    suppliesTotalCost = 0;
    populatePlayerStats();
    populateSupplies();
  }
}

function saveMyGame() {
  localStorage.setItem("player-info", JSON.stringify(player));
  saveSettings();
  localStorage.setItem("gameSettings", JSON.stringify(gameSettings));
  window.location.reload();
  document.location.href = "index2.html";
}
function loadGame() {
  let loadedSave = localStorage.getItem("loadedSave") || "";
  if (loadedSave === "yes") {
    const playerData = JSON.parse(localStorage.getItem("player-info"));
    console.log(playerData);
    player.money = playerData.money;
    // if (playerData.locale === "neighborhood") {
    //   currentLocaleIndex = 0;
    // } else if (playerData.locale.name === "park") {
    //   currentLocaleIndex = 1;
    // } else if (playerData.locale.name === "down town") {
    //   currentLocaleIndex = 2;
    // } else if (playerData.locale.name === "beach") {
    //   currentLocaleIndex = 3;
    // } else if (playerData.locale.name === "The Hexa-Stadium") {
    //   currentLocaleIndex = 4;
    // } else {
    //   currentLocaleIndex = 0;
    // }
    player.LemonStand = playerData.LemonStand;
    player.lemons = playerData.lemons;
    player.sugar = playerData.sugar;
    player.cups = playerData.cups;
    player.ice = playerData.ice;
    player.tools = playerData.tools;
    player.staff = playerData.staff;
    player.marketing = playerData.marketing;
    const gameSettings = JSON.parse(localStorage.getItem("gameSettings"));
    console.log(gameSettings);
    currentDay = gameSettings.day;
    currentMonth = gameSettings.month;
    currentYear = gameSettings.year;
    currentWeather = gameSettings.weather;
    recipeLemons = gameSettings.lemonRecipe;
    recipeSugar = gameSettings.sugarRecipe;
    recipeIce = gameSettings.iceRecipe;
    cupPrice = gameSettings.cupCharge;
    currentLocaleIndex = gameSettings.currentLocale;
    localStorage.setItem("loadedSave", "");
    populatePlayerStats();
    populateTools();
    populateStaff();
    populateMarketing();
    populateRecipe();
    keepTime();
  }
}
function updateAfterDay() {
  let resultsCheck = localStorage.getItem("dayresults") || "";
  if (resultsCheck === "yes") {
    localStorage.getItem("resultsFromDay");
    localStorage.setItem("dayresults", "");
  }
}
/* ======================
 SETTINGS CAPTURES
=========================*/
let gameSettings = {
  lemonRecipe: recipeLemons,
  sugarRecipe: recipeLemons,
  iceRecipe: recipeIce,
  cupCharge: cupPrice,
  day: currentDay,
  month: currentMonth,
  year: currentYear,
  weather: currentWeather,
  temp: currentTemp,
  locale: currentLocaleIndex,
};
/* =============================
PLAYER
============================= */
let player = {
  money: 20,
  locale: locales[currentLocaleIndex],
  LemonStand: woodenStand,
  lemons: 0,
  sugar: 0,
  cups: 0,
  ice: 0,
  tools: [],
  staff: [],
  marketing: [],
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
nextLocale.addEventListener("click", localeBtns);
prevLocale.addEventListener("click", localeBtns);
chooseLocale.addEventListener("click", localeBtns);
minusLemons.addEventListener("click", recipeButtons);
addLemons.addEventListener("click", recipeButtons);
minusSugar.addEventListener("click", recipeButtons);
addSugar.addEventListener("click", recipeButtons);
minusIce.addEventListener("click", recipeButtons);
addIce.addEventListener("click", recipeButtons);
minusLemonsSupplies.addEventListener("click", buySupplies);
addLemonsSupplies.addEventListener("click", buySupplies);
minusSugarSupplies.addEventListener("click", buySupplies);
addSugarSupplies.addEventListener("click", buySupplies);
minusCupsSupplies.addEventListener("click", buySupplies);
addCupsSupplies.addEventListener("click", buySupplies);
minusIceSupplies.addEventListener("click", buySupplies);
addIceSupplies.addEventListener("click", buySupplies);
checkOutSupplies.addEventListener("click", buySupplies);
cancelShopping.addEventListener("click", buySupplies);
addPrice.addEventListener("click", recipeButtons);
minusPrice.addEventListener("click", recipeButtons);
/* =============================
NAVIGATION BUTTONS
============================= */
savegame.addEventListener("click", saveMyGame);
mainMenu.addEventListener("click", () => {
  document.location.href = "index2.html";
});
startDay.addEventListener("click", BeginDay);
window.onload = () => {
  populateLocales();
  populateTools();
  populateLocalePicture();
  populateStaff();
  populateMarketing();
  populateRecipe();
  keepTime();
  randomWeather();
  populatePlayerStats();
  loadGame();
};
/* =============================
EXPORTS
============================= */

// export let classes = { LemonStand, Hireling, Tool, Locale };
// export let initilizedItems = {
//   lemonadeStands,
//   hirelings,
//   tools,
//   locales,
//   marketingTactics,
// };
