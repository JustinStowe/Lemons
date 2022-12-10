

# Lemons

This is me eyeballing the game Lemonade tycoon and recreating it from scratch
I really enjoyed Lemonade tycoon while growing up and it still has a special place in my heart. I want to recreate it so I could use it to teach my children economics and resource management and being able to customize it as they grow up or learn more is always a plus.

##build status

Skeleton of game exists, extras have yet to be fully implemented.

##code style

coding student using JavaScript
basicly a ridiculous amount of code that when properly put together manages to create a playable game.

##Insert screen shots here (eventually)

![lemonscreenshot-1](https://user-images.githubusercontent.com/110639329/206872855-b65d94d9-afb2-4a0c-b30b-8a76d47bd333.png)
![lemonscreenshot-2](https://user-images.githubusercontent.com/110639329/206872870-f0a9448b-2537-465e-8197-3c202366e02b.png)
![lemonscreenshot-3](https://user-images.githubusercontent.com/110639329/206872880-15069296-343b-4e56-87c3-3c401c5a5746.png)

##built with

VS code using vanilla JavaScript

##Features

I am recreating a game from scratch just by eyeballing it from remembered gameplay and youtube videos of gameplay

##code example:

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
Is this what you are asking for?

##Installation

I would love to be able to make it installable, how does one do that?

##tests

basic game runs, if you stress test it or go looking for bugs, you will definately find them. This game is definiately not any further in developement beyond Alpha stage.

##how to use: you start with index.html, deploy a live server and play the game or you follow the link on gitHub pages and play it...


##contribute: 

##credits: inspiration goes to  learning planet for creating the first edition of the game and inspiring me to attempt to make it.

#MIT CopyWrite: Justin Stowe
