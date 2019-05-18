/*
 * Create a list that holds all of your cards
 */
//getting call allcards here
var cards = document.querySelectorAll(".card");
var totCards = [...cards];
var openedCards = [];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
var time = 0;
var displayCard = function() {
  if (time == 0) {
    time++;
    startTimer();
  }
  this.classList.add("open", "show", "disabled");
  openedCards.push(this);
  matchTwoCards();
}
for (var i = 0; i < totCards.length; i++) {
  totCards[i].addEventListener("click", displayCard);
};

//shuffle all cards
var deck = document.querySelector(".deck");
var shuffleCards = shuffle(totCards);
shuffleCards.map(i => {
  [].forEach.call(shuffleCards, function(data) {
    deck.appendChild(data);
  });
});

//match condition
var count = 0;

function matchTwoCards() {
  setTimeout(function() {
    if (openedCards.length == 2) {
      moveCounter();
      if (openedCards[0].id == openedCards[1].id) {
        for (x in openedCards) {
          openedCards[x].classList.add("match");
          openedCards[x].classList.remove("open", "show");
        }
        count++;
        gameOver();
      } else {
        for (x in openedCards) {
          openedCards[x].classList.remove("open", "show", "disabled");
        }
      }
      openedCards = [];
    }
  }, 200);
}
//movesCounter
let mv = document.querySelector(".moves");

function moveCounter() {
  moves = mv.innerHTML;
  moves++;
  mv.innerHTML = moves;
  rating();
}
// setting timer
var second = 0,
  minute = 0;
hour = 0;
var timer = document.querySelector(".timer");
var interval;

function startTimer() {
  interval = setInterval(function() {
    timer.innerHTML = minute + ":mins " + second + ":secs";
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
}

// star rating
var starRate = [...document.querySelectorAll(".fa-star")];

function rating() {
  if (moves == 16) {
    starRate[2].classList.add("fa-star-o");
    starRate[2].classList.remove("fa-star");
  }

  if (moves == 28) {
    starRate[1].classList.add("fa-star-o");
    starRate[1].classList.remove("fa-star");
  }
}

//restarting the game
var restarter = document.querySelector('.restart');
restarter.addEventListener("click", restarting);

function restarting() {
  location.reload();
}

//gameover
function gameOver() {
  if (count == 8) {
    clearInterval(interval);
    var countStarLength = "";
    var starsLength = document.querySelectorAll('.fa-star').length;
    //starsLength downs to
    while (starsLength-- > 0) {
      countStarLength += '<i class="fa fa-star"></i>';
    }
    swal({
      title: "Congratulations..!",
      html: 'Won you the game.! with in moves :' + '<strong>' + moves + '</strong><br> Total Time:<strong> ' + timer.innerHTML + '</strong><br>Earned Stars :' + countStarLength,
      confirmButtonText: "Play Again",
    }).then(function() {
      restarting();
    });
  }
}
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
/
