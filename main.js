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
    console.log(`${deck.cards[i].matchedInfo + "-front"}`)
    cardHolderSection.insertAdjacentHTML('beforeend',
      `<section onClick="selectingCards(${i}, event)" class="flip-container">
      <div class="front-and-back-container ${"front-and-back-container" + i }">
    <div class="card"></div>
    <div class="card ${deck.cards[i].matchedInfo + "-back"}"></div>
    </div>
    </section>`);
  }
  startTime = Date.now();
  displayWinningTime();
}

function selectingCards(i, event) {
  flipCard(event);
  if (deck.selectedCards.length < 2 && deck.cards[i].selected === false) {
    deck.checkSelectedCards(i);
    var willDeleteCard = deck.checkIfCardsMatch(i);
    if (willDeleteCard === true) {
      deleteMatchesFromDom();
    }
  } else {
    deck.removesSelectedArray(i, event);
  }
}

function deleteMatchesFromDom(i) {
  for (var i = 0; i < deck.selectedCards.length; i++) {
    var cardContainer = document.querySelector('.front-and-back-container' + `${deck.selectedCards[i]}`);
    cardContainer.style.visibility = 'hidden';
  }
    // displayMatchedInAside(i);
    // displayMatched(i);
  deck.selectedCards = [];
  setTimeout(function changeMatchedCounter() {
    var totalMatches = document.querySelector('.total-matches');
    totalMatches.innerText = `${deck.matchedCounter}`
    changeToWinnerPage();
  }, 1500);
}

// function displayMatchedInAside(i) {
//   var box1 = document.querySelector('.mike1-matched');
//   var box2 = document.querySelector('.mike2-matched');
//   var box3 = document.querySelector('.mike3-matched');
//   var box4 = document.querySelector('.mike4-matched');
//   var box5 = document.querySelector('.mike5-matched');
//   if (deck.cards[i].matchedInfo === 'mike1') {
//     box1.classList.remove('hidden');
//   }
// }

// function displayMatched(i) {
//   if (deck.matchedCards.length < 2) {
//     return;
//   }
//   var matchedImage = document.querySelectorAll('.matched-img');
//   switch (deck.matchedCards[deck.matchedCards.length - 1].matchedInfo) {
//     case "mike1":
//     matchedImage[0].src = "assets/noGodPleaseNooo.jpg";
//     break;
//   }
//   console.log(deck.matchedCards[deck.matchedCards.length - 1].matchedInfo);
// }

function changeToWinnerPage() {
  var totalSecTimeCompletion = document.querySelector('.total-sec');
  var totalMinTimeCompletion = document.querySelector('.total-min');
  if (deck.matchedCounter === 5) {
    winnerPage.classList.remove('hidden');
    mainGamePage.classList.add('hidden');
    endTime = Date.now();
    timer();
  }
  totalSecTimeCompletion.innerText = `${seconds} seconds`;
  totalMinTimeCompletion.innerText = `${minutes} minutes`;
}

function timer() {
  totalGameSeconds = Math.floor((endTime - startTime) / 1000);
  minutes = Math.floor((totalGameSeconds / 60) % 60);
  seconds = Math.floor((totalGameSeconds) % 60);
  winningTimeHolder.push(totalGameSeconds);
  timeStorage(winningTimeHolder);
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

function timeStorage(winningTimeHolder) {
  localStorage.setItem('timeInfo', JSON.stringify(winningTimeHolder));
}

function displayWinningTime() {
  var storedTime = localStorage.getItem('timeInfo');
	var parsedTime = JSON.parse(storedTime);
  var totalGameSeconds = parsedTime
  checkLocalStorageArray(totalGameSeconds);
}

function checkLocalStorageArray(totalGameSeconds) {
  winningTimeHolder.sort(function(a, b){
    return a - b;
  });
  for (var i = 0; i < winningTimeHolder.length; i++) {
    if (winningTimeHolder.length > 3) {
      winningTimeHolder.pop(totalGameSeconds);
    }
  }
  displayTopThreeTimes(winningTimeHolder);
}

function displayTopThreeTimes(winningTimeHolder) {
  var topTime = document.querySelector('.top-min-nums');
  topTime.innerHTML = '';
  if (winningTimeHolder.length > 0) {
    for (var i = 0; i < winningTimeHolder.length; i++) {
      topTime.insertAdjacentHTML('beforeend', `<p class="winning-time">${winningTimeHolder[i]} seconds</p>`);
    }
  }
}

function flipCard(event) {
  var closest = event.target.closest('.front-and-back-container');
  closest.classList.toggle('flip');
}
