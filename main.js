var card1 = new Card('mike1', './assets/noGodPleaseNooo.jpg');
var card2 = new Card('mike1', './assets/noGodPleaseNooo.jpg');
var card3 = new Card('mike2', './assets/sexySanta.jpg');
var card4 = new Card('mike2', './assets/sexySanta.jpg');
var card5 = new Card('mike3', './assets/tellMeMore.jpg');
var card6 = new Card('mike3', './assets/tellMeMore.jpg');
var card7 = new Card('mike4', './assets/prisonMike.jpg');
var card8 = new Card('mike4', './assets/prisonMike.jpg');
var card9 = new Card('mike5', './assets/worldsBestBoss.jpg');
var card10 = new Card('mike5', './assets/worldsBestBoss.jpg');
var cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];
var deck = new Deck(cards);

window.addEventListener('load', displayCards);
// displayCards()

function displayCards() {
  var allCards = deck.cards.length;
  var cardHolderSection = document.querySelector('.container-to-all-cards');
  console.log(allCards)
  for (var i = 0; i < cards.length; i++) {
    cardHolderSection.insertAdjacentHTML('afterend', `<section class="card-container"><div class="card" id=${"card" + i }>${cards[i].cardPhoto}</div>
    </section>`);
  }
}
