//------------ts-this-----------------
//定义接口 让类型重用能够变得清晰简单些
interface Card {
    suit:string,
    card:number
}
interface Deck {
    suits:string[],
    cards:number[],
    createCardPicker (this: Deck): () => Card //这里this 是 Deck 类型的，而非 any，显示写出来
}

let deck3:Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function (this: Deck) { //这里this 是 Deck 类型的，而非 any
        return () => {
          let pickedCard = Math.floor(Math.random() * 52)
          let pickedSuit = Math.floor(pickedCard / 13)
    
          return {
              suit: this.suits[pickedSuit], 
              card: pickedCard % 13
            }
        }
    }
}
let cardPicker3 = deck3.createCardPicker()
let pickedCard3 = cardPicker3(); 
console.log('card: ' + pickedCard3.card + ' of ' + pickedCard3.suit)