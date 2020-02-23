class Card {
  constructor(matchedInfo) {
    this.matchedInfo = matchedInfo;
    this.matched = false;
    this.selected = false;
    // this.id = id;
  }

  match() {
    this.matched = true;
    //if this.selected === true && same class on both cards are equal
    //to each other, then we want to push both cards into the matched card array
    //remove cards from selected cards array
    //and reassign this.matched to true in the case that they are a pair
  }

}
