var deck = new Deck();

window.addEventListener('load', displayCards);

function displayCards() {
  deck.pushToDeck()
  var cardHolderSection = document.querySelector('.container-to-all-cards');
  console.log(deck.cards)
  for (var i = 0; i < deck.cards.length; i++) {
    cardHolderSection.insertAdjacentHTML('afterend',
      `<section onClick="initialCardClick(${i}, event)" class="flip-container">
      <div class="front-and-back-container ${"front-and-back-container" + i }">
    <div class="card ${"card" + i + "-front"}"></div>
    <div class="card ${"card" + i + "-back"}"></div>
    </div>
    </section>`);
  }
}

function initialCardClick(i, event) {
  if (deck.selectedCards.length < 2 && deck.cards[i].selected === false) {
    deck.checkSelectedCards(i);
    flipCard(event);
    var willDeleteCard = deck.checkIfCardsMatch(i);
    console.log(willDeleteCard);
    if (willDeleteCard === true) {
      deleteMatchesFromDom();
      console.log(deck.selectedCards)
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
  }, 1500);
  changeToWinnerPage();
}

function changeToWinnerPage() {
  var winnerPage = document.querySelector('.winner-page');
  var mainGamePage = document.querySelector('.main-game');
  if (deck.matchedCounter === 5) {
    winnerPage.classList.add('hidden');
    mainGamePage.classList.remove('hidden');
  }
}

function flipCard(event) {
  var closest = event.target.closest('.front-and-back-container');
  closest.classList.toggle('flip');
}
