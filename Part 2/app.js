let shuffleURL =
  "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

// let drawCardURL = `https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1`;

//1.
// function getCard() {
//   $.getJSON(shuffleURL).then((deck) => {
//     deck_id = deck.deck_id;
//     let drawCardURL = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
//     return $.getJSON(drawCardURL).then((card) => {
//       cardInfo = card.cards[0];
//       console.log(`${cardInfo.value} of ${cardInfo.suit}`);
//     });
//   });
// }

//2.
function getCard() {
  $.getJSON(shuffleURL).then((deck) => {
    deck_id = deck.deck_id;
    let drawCardURL = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
    return $.getJSON(drawCardURL).then((card) => {
      cardInfo = card.cards[0];
      console.log(`${cardInfo.value} of ${cardInfo.suit}`);
      return $.getJSON(drawCardURL).then((secCard) => {
        secCardInfo = secCard.cards[0];
        console.log(`${secCardInfo.value} of ${secCardInfo.suit}`);
      });
    });
  });
}

//3.
