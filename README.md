## Aim:

The main aim is to design a memory game with given specifications in the Project.

### How to start

clone the repository given by the Udacity. some folders and files are given already with some code in it. Those folders and files are
  1. css
      + app.css
  2. img
      + /images
  3. js
      + app.js
  4. CONTRIBUTING.md
  5. index.html
  6. README.md

### what is the memory game?

The memory game is the basic matching game to test the player's memory. In a deck of cards, the player needs to match each pair to win the game.

### Requirements for the game.

`Memory game logic` - The game randomly shuffles the cards. A user wins once all cards have successfully been matched.

`Congratulations pop-up` - when a user wins the game a model appears to congratulate the player and asks if they want to play again. It should also tell the player how much time it took to took to win the game, and what the star rating was.

Restart Button - A restart button should reset the game board, timer and star rating.

`Star rating` - The game displays the star rating (3 stars) that reflects the player performance. At the beginning of a it should display at least 3 stars. After some number of moves, there should be the decrease in the stars. For some more moves it should decrease in some more moves.

`Timer` - When the player starts the game the timer should start and when the player wins the game it should stop.

`Move counter` - Game has to display how number of moves the player have made.

`Restart` - Game has to include the restart button.

### What to do in this game?

-   Created a list that holds all of the cards.
-   Display the cards on the page and shuffle those cards using shuffle function.
-   Add `addEventListener` to each every card
-   If two cards opened check for the match condition by using `matchTwoCards()`
-   Increase the movie count when two cards opened by using `moveCounter()`
-   When the player begins the game set the time using `setInterval()`
-   For every certain moves decrease the a star from three stars
-   When a player clicks the restart button reset the cards, stars, moves and timer set to starting position   
-   When all cards are matched display the popup by using sweetalter

## Conclusion

  I have very interesting to design this type of games by using front-end technologies and learnt DOM with JavaScript
