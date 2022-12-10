console.log("connected");
/* ======================
 MODULE IMPORTS
=========================*/
// import { classes } from "./script3";
// import { initilizedItems } from "./script3";
// console.log(classes);
// console.log(initilizedItems);
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
  constructor(
    name,
    rent,
    info,
    people,
    popularity,
    maxPrice,
    targetRecipeLemons,
    targetRecipeSugar,
    targetrecipeIce
  ) {
    this.name = name;
    this.rent = rent;
    this.info = info;
    this.people = people;
    this.popularity = popularity;
    this.maxPrice = maxPrice;
    this.targetRecipeLemons = targetRecipeLemons;
    this.targetRecipeSugar = targetRecipeSugar;
    this.targetrecipeIce = targetrecipeIce;
  }
}
const neighborhood = new Locale(
  "neighborhood",
  0,
  "In front of your parents house is the perfect place to start selling lemonade, and it will not cost a penny in rent.",
  10,
  5,
  0.5,
  3,
  3,
  2
);
const park = new Locale(
  "park",
  5,
  "A lemonade stand at the park? Great idea, many people play and exercise at the park and would enjoy relieving their thirst with lemonade. ",
  20,
  0,
  0.75,
  4,
  2,
  3
);
const downTown = new Locale(
  "down town",
  15,
  "There is always people and tourist down town bustling around and would appreciate refreshing lemonade ",
  40,
  0,
  1.0,
  3,
  4,
  2
);
const beach = new Locale(
  "beach",
  30,
  "What could be better than having fun at the beach  and being able to enjoy refreshing lemonade.",
  120,
  0,
  1.25,
  4,
  4,
  3
);
const hexaStadium = new Locale(
  "The Hexa-Stadium",
  100,
  "You better bring your A-game to the game, the masses of fans will want something to wash down those hotdogs",
  800,
  0,
  1.5,
  2,
  2,
  2
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
 ARRAYS
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

/* ======================
 GLOBAL VARS
=========================*/
let recipeLemons = 0;
let recipeSugar = 0;
let recipeIce = 0;
let currentLocaleIndex = 0;
let currentDay = 0;
let currentMonth = 0;
let currentYear = 0;
let currentWeather = 0;
let currentTemp = 0; //40 - 100//
let cupSoldTotal = 0;
let totalProfits = 0;
let tastesBad = 0;
let tastesGood = 0;
let tooExpensive = 0;
let cupPrice = 0;
let pitcherCups = 0;
/* =============================
PLAYER
============================= */
let player = {
  money: 0,
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
let customers = player.locale.people * 0.1 * player.locale.popularity;

/* ======================
 DOM STUFF
=========================*/
const cupsSold = document.querySelector("#cups-sold");
const profits = document.querySelector("#profit");
const nastyReaction = document.querySelector("#bad");
const goodReaction = document.querySelector("#good");
const costly = document.querySelector("#costly");
const timeLi = document.querySelector("#time");
const weatherLi = document.querySelector("#current-weather");
const tempLi = document.querySelector("#currentTemp");
const Settings = document.querySelector(".settings");
// const lemonStatus = document.querySelector('#lemons')
// const sugarStatus = document.querySelector('#sugar')
// const iceStatus = document.querySelector('#ice')
// const cupStatus = document.querySelector('#cups')
// const totalPitchers = document.querySelector('#pitcher')
const suppliesStatus = document.querySelector(".supplies");
const localeRender = document.querySelector(".locale-simulation");
const playerCash = document.querySelector("#cash");
const processDay = document.querySelector(".start");

/* =============================
FUNCTIONS
============================= */
function loadGameData() {
  const gameSettings = JSON.parse(localStorage.getItem("gameSettings"));
  console.log(gameSettings);
  currentDay = gameSettings.day;
  console.log();
  currentMonth = gameSettings.month;
  console.log();
  currentYear = gameSettings.year;
  console.log();
  currentWeather = gameSettings.weather;
  console.log();
  recipeLemons = gameSettings.lemonRecipe;
  console.log();
  recipeSugar = gameSettings.sugarRecipe;
  console.log();
  recipeIce = gameSettings.iceRecipe;
  console.log();
  currentLocaleIndex = gameSettings.currentLocale;
  cupPrice = gameSettings.cupCharge;
  const playerData = JSON.parse(localStorage.getItem("player-data"));
  console.log(playerData);
  player.money = playerData.money;
  player.locale = playerData.locale;
  player.LemonStand = playerData.LemonStand;
  player.lemons = playerData.lemons;
  player.sugar = playerData.sugar;
  player.cups = playerData.cups;
  player.ice = playerData.ice;
  player.tools = playerData.tools;
  player.staff = playerData.staff;
  player.marketing = playerData.marketing;
  console.log(player);
  populateDay();
  populateSettings();
  makePitcher();
  populateStatusBar();
  populateLocalePicture();
}
function populateStatusBar() {
  suppliesStatus.innerHTML = `
   <span id="lemons">lemons: ${player.lemons} </span> ||<span id="sugar"> Sugar: ${player.sugar} </span> ||<span id="ice"> Ice: ${player.ice} </span> ||<span id="cups">Cups: ${player.cups} </span> ||<span id="pitcher">  Cups in Pitcher:${pitcherCups} </span>
  `;
  playerCash.innerText = `${player.money}`;
}
function populatePerformance() {
  cupsSold.innerText = `${cupSoldTotal}`;
  profits.innerText = `${totalProfits.toFixed(2)}`;
  nastyReaction.innerText = `${tastesBad}`;
  goodReaction.innerText = `${tastesGood}`;
  costly.innerText = `${tooExpensive}`;
}
function populateDay() {
  timeLi.innerText = ` year: ${currentYear} month: ${currentMonth} day: ${currentDay}`;
  weatherLi.innerText = `Current Weather: ${currentWeather}`;
  tempLi.innerText = `Temp: ${currentTemp}`;
}
function populateSettings() {
  Settings.innerHTML = `
   <h1>Today's Settings:
                <ul>
                    <li id="rent">rent: ${player.locale.rent} </li>
                    <li id="owned-upgrades">upgrades: <ul>${player.tools
                      .map((item) => {
                        return `<li>
      ${item.name} </li>`;
                      })
                      .join("")}</ul> </li>
                    <li id="advertising">advertising: <ul>${player.marketing
                      .map((item) => {
                        return `<li>
      ${item.name} </li>`;
                      })
                      .join("")}</ul> </li>
                    <li id="cup-price">cup Price: ${cupPrice.toFixed(2)} </li>
                    </ul>
                    <ul id="recipe"> Recipe: </ul>
                    <li id="lemons-in-recipe"> lemons: ${recipeLemons}</li>
                    <li id="sugar-in-recipe"> Sugar: ${recipeSugar} </li>
                    <li id= ice-in-recipe> Ice: ${recipeIce} </li>
            </h1>`;
}
function makePitcher() {
  if (player.lemons >= recipeLemons && player.sugar >= recipeSugar) {
    player.lemons -= recipeLemons;
    player.sugar -= recipeSugar;
    pitcherCups += 5;
  } else {
    alert("oh no, you ran out of supplies");
    endDay();
  }
}
function endDay() {
  if (tastesGood > tastesBad || tooExpensive) {
    player.locale.popularity + 10;
  } else {
    if (player.locale.popularity > 10) {
      player.locale.popularity = 0;
    } else {
      player.locale.popularity - 10;
    }
  }
  console.log(player.locale.popularity);
  localStorage.setItem("dayResults", "yes");
  localStorage.setItem("resultsFromDay", JSON.stringify(player));
  location.reload();
  alert("You have reached the end of the day.");
  document.location.href = "index3.html";
}

function populateLocalePicture() {
  if (player.locale.name === "neighborhood") {
    localeRender.innerHTML = `
    <img src="${localePics[0]}" alt="" height= "700vh width = "700vw"">
            <div id="flavor-text"><p> ${locales[0].info}</div>
    
    `;
  }

  if (player.locale.name === "park") {
    localeRender.innerHTML = `
    <img src="${localePics[1]}" alt="" height= "700vh width = "700vw"">
            <div id="flavor-text"><p> ${locales[1].info}</div>
    `;
  }
  if (player.locale.name === "down Town") {
    localeRender.innerHTML = `
    <img src="${localePics[2]}" alt="" height= "700vh width = "700vw"">
            <div id="flavor-text"><p> ${locales[2].info}</div>
    `;
  }
  if (player.locale.name === "beach") {
    localeRender.innerHTML = `
    <img src="${localePics[3]}" alt="" height= "700vh width = "700vw"">
            <div id="flavor-text"><p> ${locales[3].info}</div>
    `;
  }
  if (player.locale.name === "The Hexa-Stadium") {
    localeRender.innerHTML = `
    <img src="${localePics[4]}" alt="" height= "700vh width = "700vw"">
            <div id="flavor-text"><p> ${locales[4].info}</div>
    `;
  }
}

/*
  per 10 points of popularity, 10% of locale's people will stop
  umbrella will increase chances people will stop by 1 step.
  ice machine will provide 100 ice everyday
  boombox will increase chances people will stop by 1 step
  juicer will divide timeout time in half when making another pitcher
  cash register will divide timeout time in half that customer will be occupying stand div
  fridge prevents supplies from disappearing
  bonuses can increase the % or increase temp. increase locale people total.
   */
/*(const umbrella = new Tool("umbrella", 99, 5);
const iceMachine = new Tool("ice-machine", 99, 1);
const boomBox = new Tool("Boom-Box", 149, 2);
const juicer = new Tool("juicer", 199, 10);
const cashRegister = new Tool("cash register", 350, 20);
const fridge = new Tool("fridge", 800, 1);*/
function handlebonuses() {
  if (player.tools.includes(umbrella)) {
  }
}
function dayOfBusiness() {
  console.log(customers);
  customerNumber = 0 + customers;
  console.log(customerNumber);
  let processCustomers = setInterval(() => {
    if (customerNumber === 0) {
      clearInterval(processCustomers);
      endDay();
    }
    if (pitcherCups === 0) {
      customerNumber += 1;
      makePitcher();
    }
    if (cupPrice.toFixed(2) <= player.locale.maxPrice) {
      player.money += cupPrice;
      totalProfits += cupPrice;
      pitcherCups -= 1;
      player.ice -= recipeIce;
      cupSoldTotal += 1;
      populateStatusBar();
      if (
        recipeLemons === player.locale.targetRecipeLemons &&
        recipeSugar === player.locale.targetRecipeSugar &&
        recipeIce === player.locale.targetrecipeIce
      ) {
        tastesGood += 1;
      } else {
        tastesBad += 1;
      }
    } else {
      tooExpensive += 1;
    }
    populatePerformance();
    customerNumber -= 1;
    console.log(customerNumber);
  }, 5000);
}

/* =============================
EVENT LISTENERS
============================= */
processDay.addEventListener("click", dayOfBusiness);
window.onload = () => {
  loadGameData();
};
/* =============================
MODULE EXPORTS
============================= */
