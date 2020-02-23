var deck = new Deck();
var selectedCards = deck.selectedCards;

window.addEventListener('load', displayCards);

function displayCards() {
  var allCards = deck.cards;
  var cardHolderSection = document.querySelector('.container-to-all-cards');
  console.log(allCards)
  for (var i = 0; i < deck.cards.length; i++) {
    cardHolderSection.insertAdjacentHTML('afterend',
      `<section onClick="startMatching(${i}, event)" class="flip-container">
      <div class="front-and-back-container ${"front-and-back-container" + i }">
    <div class="card ${"card" + i + "-front"}" id=${deck.cards[i].id}></div>
    <div class="card ${"card" + i + "-back"}" id=${deck.cards[i].id}></div>
    </div>
    </section>`);
  }
}

function startMatching(i, event) {
  if (selectedCards.length < 2 && deck.cards[i].selected === false) {
    flipCard(event)
    deck.cards[i].selected = true;
    selectedCards.push(deck.cards[i]);
  } else {
    removesSelectedArray(i, event)
  }
}

function removesSelectedArray(i, event) {
  if (selectedCards.length <= 2 && deck.cards[i].selected === true) {
    var indexCard = selectedCards.indexOf(deck.cards[i]);
    selectedCards.splice(indexCard, 1);
    flipCard(event);
    console.log("intial array", selectedCards)
  }
}

function flipCard(event) {
  var closest = event.target.closest('.front-and-back-container');
  closest.classList.toggle('flip');
}
