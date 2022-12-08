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

let recipeLemons;
let recipeSugar;
let recipeIce;
let currentLocaleIndex;
let suppliesTotalCost;
let currentDay;
let currentMonth;
let currentYear;
let currentWeather;
let currentTemp; //40 - 100//
/* ======================
 DOM STUFF
=========================*/

/* =============================
FUNCTIONS
============================= */
function loadGameData() {
  const gameData = JSON.parse(localStorage.getItem("gameSettings"));
  console.log(gameData);
  currentDay = gameSettings.day;
  currentMonth = gameSettings.month;
  currentYear = gameSettings.year;
  currentWeather = gameSettings.weather;
  recipeLemons = gameSettings.lemonRecipe;
  recipeSugar = gameSettings.sugarRecipe;
  recipeIce = gameSettings.iceRecipe;
  currentLocaleIndex = gameSettings.currentLocale;
  const playerData = JSON.parse(localStorage.getItem("player-info"));
  console.log(playerData);
  player.money = playerData.money;
  player.locale = locales[currentLocaleIndex];
  player.LemonStand = playerData.LemonStand;
  player.lemons = playerData.lemons;
  player.sugar = playerData.sugar;
  player.cups = playerData.cups;
  player.ice = playerData.ice;
  player.tools = playerData.tools;
  player.staff = playerData.staff;
  player.marketing = playerData.marketing;
  console.log(player);
}
/*
1 pitcher equals 5 cups
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
  loadGameData;
};
/* =============================
MODULE EXPORTS
============================= */
