var deck = new Deck();
var cardPictures = ['./assets/noGodPleaseNoo.jpg', './assets/prisonMike.jpg', './assets/sexySanta.jpg', './assets/tellMeMore.jpg', './assets/worldsBestBoss.jpg'];

window.addEventListener('load', displayCards);

function displayCards() {
  var allCards = deck.cards;
  var cardHolderSection = document.querySelector('.container-to-all-cards');
  console.log(allCards)
  for (var i = 0; i < deck.cards.length; i++) {
    cardHolderSection.insertAdjacentHTML('afterend',
      `<section onClick="initallyClickedCard(${i})" class="card-container">
    <div class="card ${"card" + i}" id=${deck.cards[i].id}></div>
    </section>`);
  }
}

function initallyClickedCard(i) {
  if (deck.selectedCards.length < 2) {
    changePicture(i);
    deck.selectedCards.push(deck.cards[i]);
      console.log("intial array", deck.selectedCards)
  } else {
    clickCardAgain(i)
    // console.log("Too many cards");
  }
}

function clickCardAgain(i) {
  for (var i = 0; i < deck.selectedCards.length; i++) {
    if (deck.selectedCards[i].id == event.target.id) {
      var indexCard = deck.selectedCards.indexOf(deck.selectedCards[i]);
      deck.selectedCards.splice(indexCard, 1);
    }
  }
  console.log(deck.selectedCards)
}

function changePicture(i) {
  var individualCards = document.querySelectorAll('.card-container');
  var card = document.querySelectorAll('.card');
  var myArray = Array.from(individualCards);
  var reversedArray = myArray.reverse()
  if (i === 0 || i === 1) {
    reversedArray[i].children[0].style.backgroundImage = "url('./assets/noGodPleaseNooo.jpg')";
  } else if (i === 2 || i === 3) {
    reversedArray[i].children[0].style.backgroundImage = "url('./assets/prisonMike.jpg')";
  } else if (i === 4 || i === 5) {
    reversedArray[i].children[0].style.backgroundImage = "url('./assets/sexySanta.jpg')";
  } else if (i === 6 || i === 7) {
    reversedArray[i].children[0].style.backgroundImage = "url('./assets/tellMeMore.jpg')";
  } else if (i === 8 || i === 9) {
    reversedArray[i].children[0].style.backgroundImage = "url('./assets/worldsBestBoss.jpg')";
  }
}
