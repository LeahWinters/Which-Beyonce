class Deck {
  constructor() {
    this.cards = this.pushToDeck();
    this.matchedCards = [];
    this.selectedCards = [];
  }

  shuffle() {

  }

  checkSelectedCards() {

  }

  moveToMatched() {

  }

  pushToDeck() {
    var cards = [];
    for (var i = 0; i < 10 ; i++) {
      var newCard = new Card('mike' + i, i)
      cards.push(newCard)
    }
    return cards;
  }
}
