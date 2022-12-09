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
  const playerData = JSON.parse(localStorage.getItem("player-info"));
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
}
function populatePerformance() {
  cupsSold.innerText = `${cupSoldTotal}`;
  profits.innerText = `${totalProfits}`;
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
                    <li id="owned-upgrades">upgrades: ${player.tools} </li>
                    <li id="advertising">advertising: ${player.marketing} </li>
                    <li id="cup-price">cup Price: ${cupPrice} </li>
                    </ul>
                    <ul id="recipe"> Recipe: </ul>
                    <li id="lemons-in-recipe"> lemons: ${recipeLemons}</li>
                    <li id="sugar-in-recipe"> Sugar: ${recipeSugar} </li>
                    <li id= ice-in-recipe> Ice: ${recipeIce} </li>
            </h1>`;
}

/*
1 pitcher equals 5 cups
function to break down sugar and lemons from recipe into total pitchers needed
*/
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
/* =============================
EVENT LISTENERS
============================= */
window.onload = () => {
  loadGameData();
};
/* =============================
MODULE EXPORTS
============================= */
