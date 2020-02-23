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

  checkMatchedInfo(i) {
    if (this.selectedCards[0].matchedInfo === this.selectedCards[1].matchedInfo) {
      this.moveToMatched(i);
      this.selectedCards = [];
    }
  }

  moveToMatched(i) {
    for (var i = 0; i < this.selectedCards.length; i++) {
      this.matchedCards.push(this.selectedCards[i]);
      this.selectedCards[i].match();
    }
  }

  checkIfCardsMatch(i) {
    if (deck.selectedCards.length === 2) {
    deck.checkMatchedInfo(i);
    console.log('matched array', deck.matchedCards);
   }
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
