class Deck {
  constructor() {
    this.cards = [];
    this.matchedCards = [];
    this.matchedCounter = 0;
    this.selectedCards = [];
  }

  shuffle() {

  }

  checkSelectedCards(i) {
    this.selectedCards.push(i);
    this.cards[i].selected = true;
  }

  removesSelectedArray(i) {
    if (this.selectedCards.length <= 2 && this.cards[i].selected === true) {
      var indexCard = this.selectedCards.indexOf(deck.cards[i]);
      this.selectedCards.splice(indexCard, 1);
      this.cards[i].selected = false;
    }
  }

  checkIfCardsMatch(i) {
    if (this.selectedCards.length === 2) {
    return this.checkMatchedInfo(i);
    }
    return false;
  }

  checkMatchedInfo(i) {
    if (this.cards[this.selectedCards[0]].matchedInfo === this.cards[this.selectedCards[1]].matchedInfo) {
      this.moveToMatched(i);
      return true;
    } else {
      return false;
    }
  }

  moveToMatched(i) {
    for (var i = 0; i < this.selectedCards.length; i++) {
      var currentCard = this.cards[this.selectedCards[i]]
      currentCard.match();
      this.matchedCards.push(currentCard);
    }
    this.matchedCounter++;
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
