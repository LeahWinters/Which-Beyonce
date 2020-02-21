var deck = new Deck();
var cardPictures = ['./assets/noGodPleaseNoo.jpg', './assets/prisonMike.jpg', './assets/sexySanta.jpg', './assets/tellMeMore.jpg', './assets/worldsBestBoss.jpg'];

window.addEventListener('load', displayCards);

function displayCards() {
  var allCards = deck.cards;
  var cardHolderSection = document.querySelector('.container-to-all-cards');
  console.log(allCards)
  for (var i = 0; i < 10; i++) {
    cardHolderSection.insertAdjacentHTML('afterend',
      `<section onClick="clickedCard(${i})" class="card-container">
    <div class="card" id=${"card" + i}></div>
    </section>`);
  }
}

function clickedCard(i) {
  if (deck.selectedCards.length < 2) {
    changePicture(i);
    deck.selectedCards.push(deck.cards[i]);
  } else {
    console.log("Too many cards")
  }
}

function changePicture(i) {
  var individualCards = document.querySelectorAll('.card-container');
  var card = document.querySelectorAll('.card');
  // console.log(i, individualCards[i])
  var myArray = Array.from(individualCards);
  var reversedArray = myArray.reverse()
  if (i === 0 || i === 1) {
    reversedArray[i].children[0].style.backgroundImage = "url('./assets/noGodPleaseNooo.jpg')";
  }
}
