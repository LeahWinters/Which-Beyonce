class Deck {
  constructor() {
    this.cards = [];
    this.matchedCards = [];
    this.selectedCards = [];
  }

  shuffle() {

  }

  checkSelectedCards(i, event) {
    this.selectedCards.push(this.cards[i]);
    this.cards[i].selected = true;
  }

  removesSelectedArray(i, event) {
    if (this.selectedCards.length <= 2 && this.cards[i].selected === true) {
      var indexCard = this.selectedCards.indexOf(this.cards[i]);
      this.selectedCards.splice(indexCard, 1);
      deck.cards[i].selected = false;
      console.log("array after remove", this.selectedCards);
    }
  }

  moveToMatched() {

  }

  pushToDeck() {
    var matchedCardId = ['mike1', 'mike2', 'mike3', 'mike4', 'mike5', 'mike1', 'mike2', 'mike3', 'mike4', 'mike5'];
    for (var i = 0; i < 10; i++) {
      var newCard = new Card(matchedCardId[i]);
      this.cards.push(newCard);
    }
    return this.cards;
  }
}
