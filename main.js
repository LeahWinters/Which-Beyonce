var deck = new Deck();

window.addEventListener('load', displayCards);

function displayCards() {
  deck.pushToDeck()
  var cardHolderSection = document.querySelector('.container-to-all-cards');
  console.log(deck.cards)
  for (var i = 0; i < deck.cards.length; i++) {
    cardHolderSection.insertAdjacentHTML('afterend',
      `<section onClick="initialCardClick(${i}, event)" class="flip-container">
      <div class="front-and-back-container ${"front-and-back-container" + i }">
    <div class="card ${"card" + i + "-front"}"></div>
    <div class="card ${"card" + i + "-back"}"></div>
    </div>
    </section>`);
  }
}

function initialCardClick(i, event) {
  if (deck.selectedCards.length < 2 && deck.cards[i].selected === false) {
    deck.checkSelectedCards(i);
    flipCard(event);
    deck.checkIfCardsMatch(i);
    console.log("initial array", deck.selectedCards);
  } else {
    deck.removesSelectedArray(i, event)
    flipCard(event);
  }
}


// function checkSelectedCardsArrayLength(i, event) {
//   if (selectedCards.length === 2 && deck.cards[i].selected === true) {
//     checkIfMatched(i)
//   }
// }

// function checkIfMatched(i, event) {
//   debugger
//     if (deck.cards[0].classList === 'card0-back' && deck.cards[1].classList === 'card1-back') {
//       deck.cards[i].matched = true;
//   } else {
//     // deck.cards[i].matched = false;
//   }
//     // var indexCard = selectedCards.indexOf(deck.cards[i]);
//     // selectedCards.splice(indexCard, 2);
//     console.log(deck.cards[i].matched)
//     console.log(selectedCards);
// }
//if this.selected === true && same class on both cards are equal
//to each other, then we want to push both cards into the matched card array
//remove cards from selected cards array
//and reassign this.matched to true in the case that they are a pair

function flipCard(event) {
  var closest = event.target.closest('.front-and-back-container');
  closest.classList.toggle('flip');
}
