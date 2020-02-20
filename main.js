var cards = []
var deck = new Deck(cards);

function pushToDeck() {
  console.log(deck)
  for (var i = 0; i < 10 ; i++) {
    var newCard = new Card('mike' + i, './assets/image' + i + '.jpg')
    cards.push(newCard)
  }
}

pushToDeck()

window.addEventListener('load', displayCards);
// displayCards()

function displayCards() {
  var allCards = deck.cards.length;
  var cardHolderSection = document.querySelector('.container-to-all-cards');
  console.log(allCards)
  for (var i = 0; i < cards.length; i++) {
    cardHolderSection.insertAdjacentHTML('afterend', `<section class="card-container"><div class="card" id=${"card" + i}>${cards[i].cardPhoto}</div>
    </section>`);
  }
}
