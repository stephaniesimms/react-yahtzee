Yahtzee! An interactive game exercise built off of React starter code provided by [Rithm School](https://www.rithmschool.com/). Pair programmed with Andrew Li to fix bugs and add new features:
* added logic to Rule class for scoring a Full House and Small Straight
* fixed clicking on dice, rolling dice, and scoreboard functionality
* added score keeping and game reset
* wrote tests

## Installation
Install required npm libraries:
`npm install`

Start WebPack:
`npm start`

## The Game
Yahtzee is a chance-and-strategy dice rolling game. A game is played over 13 rounds.

Each round, the player rolls five 6-sided dice. They may click on any number of dice to “freeze” or “unfreeze” them (frozen dice are colored darker). They may re-roll the unfrozen dice up to 2 times.

Each round, they must assign their dice to any unclaimed scoring category. Each category scores differently.

After 13 rounds, the game is over, and the player’s score is the total of each scoring category.
