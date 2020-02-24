class Card {
  constructor(matchedInfo) {
    this.matchedInfo = matchedInfo;
    this.matched = false;
    this.selected = false;
  }

  match() {
    this.matched = true;
  }

}
