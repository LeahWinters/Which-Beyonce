var deck = new Deck();
var cardHolderSection = document.querySelector('.container-to-all-cards');
var winnerPage = document.querySelector('.winner-page');
var mainGamePage = document.querySelector('.main-game');
var startTime;
var endTime;
var totalGameSeconds;
var minutes;
var seconds;
var winningTimeHolder = [];

window.addEventListener('load', function() {
  displayCards(deck)
});
document.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.classList.contains('play-again-btn')) {
    playAgain(event);
  }
}

function displayCards(deck) {
  deck.pushToDeck();
  for (var i = 0; i < deck.cards.length; i++) {
    cardHolderSection.insertAdjacentHTML('beforeend',
      `<section onClick="initialCardClick(${i}, event)" class="flip-container">
      <div class="front-and-back-container ${"front-and-back-container" + i }">
    <div class="card ${"card" + i + "-front"}"></div>
    <div class="card ${"card" + i + "-back"}"></div>
    </div>
    </section>`);
  }
  startTime = Date.now();
  displayWinningTime();
}

function initialCardClick(i, event) {
  flipCard(event);
  if (deck.selectedCards.length < 2 && deck.cards[i].selected === false) {
    deck.checkSelectedCards(i);
    var willDeleteCard = deck.checkIfCardsMatch(i);
    if (willDeleteCard === true) {
      deleteMatchesFromDom();
    }
  } else {
    deck.removesSelectedArray(i, event)
    flipCard(event);
  }
}

function deleteMatchesFromDom() {
  for (var i = 0; i < deck.selectedCards.length; i++) {
    var cardContainer = document.querySelector('.front-and-back-container' + `${deck.selectedCards[i]}`);
    cardContainer.style.visibility = 'hidden';
  }
  deck.selectedCards = [];
  setTimeout(function changeMatchedCounter() {
    var totalMatches = document.querySelector('.total-matches');
    totalMatches.innerText = `${deck.matchedCounter}`
    changeToWinnerPage();
  }, 1500);
}

function changeToWinnerPage() {
  var totalSecTimeCompletion = document.querySelector('.total-sec');
  var totalMinTimeCompletion = document.querySelector('.total-min');
  if (deck.matchedCounter === 5) {
    winnerPage.classList.remove('hidden');
    mainGamePage.classList.add('hidden');
  }
  endTime = Date.now();
  timer();
  totalSecTimeCompletion.innerText = `${seconds} seconds`;
  totalMinTimeCompletion.innerText = `${minutes} minutes`;
}

function timer() {
  totalGameSeconds = Math.floor((endTime - startTime) / 1000);
  minutes = Math.floor((totalGameSeconds / 60) % 60);
  seconds = Math.floor((totalGameSeconds - minutes) % 60);
  timeStorage(minutes, seconds);
}

function playAgain(event) {
  winnerPage.classList.add('hidden');
  mainGamePage.classList.remove('hidden');
  cardHolderSection.innerHTML = '';
  deck = new Deck();
  var totalMatches = document.querySelector('.total-matches');
  totalMatches.innerText = 0;
  displayCards(deck);
}

function flipCard(event) {
  var closest = event.target.closest('.front-and-back-container');
  closest.classList.toggle('flip');
}

function timeStorage(minutes, seconds) {
  var timeToStore = {
    minutes: minutes,
    seconds: seconds
  }
  localStorage.setItem('timeInfo', JSON.stringify(timeToStore));
}

function displayWinningTime() {
  var storedTime = localStorage.getItem('timeInfo');
	var parsedTime = JSON.parse(storedTime);
  minutes = parsedTime.minutes;
  seconds = parsedTime.seconds;
  var totalTime = totalGameSeconds
  checkTimeArray(totalTime);
  var topTime = document.querySelector('.top-min-nums');
  topTime.insertAdjacentHTML('beforeend', `<p class="winning-time">${minutes} minutes ${seconds} seconds</p>`);

}

function checkTimeArray(totalTime) {
  winningTimeHolder.push(totalTime);
  console.log(winningTimeHolder);
  for (var i = 0; i < winningTimeHolder.length; i++) {
    if (winningTimeHolder.length <= 3) {
      winningTimeHolder.sort();
      console.log(winningTimeHolder);
    } else if (winningTimeHolder.length > 3) {
      winningTimeHolder.sort();
      winningTimeHolder.pop(totalTime);
      console.log(winningTimeHolder);
    }
  }
}
