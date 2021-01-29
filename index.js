//create arrays for creating cards
let cards = [];
const sets = ['red','yellow','black'];

//creating the cards by looping through the sets and numbers
for (i=0;i<3;i++){
  let tempSet = sets[i];
  for (n=0;n<10;n++){
    let tempNum = n;
    let tempCard = tempSet + " " + tempNum;
    cards.push(tempCard);
  }
}

//shuffling the cards
let tempCards = [];
for (x=0;x<30;x++){
  let tempPos = Math.floor(Math.random()*30);
  tempCards.push(cards[tempPos]);
}

//replacing the cards with the shuffled version
cards = tempCards;

//displaying the cards
for (y=0;y<30;y++){
  console.log(cards[y]);
}
