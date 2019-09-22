// ------------this---------------
// example
let deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            let pickedCard = Math.floor(Math.random() * 52)
            let pickedSuit = Math.floor(pickedCard / 13)

            return { 
                suit: this.suits[pickedSuit], //这里的this会报错，没有指向deck对象
                card: pickedCard % 13 
            }
        }
    }
}

let cardPicker = deck.createCardPicker()
//let pickedCard = cardPicker(); // 因为此时的this是window
//console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)

//箭头函数可解决
let deck2 = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        return () => { //使用箭头函数解决 this指向问题
            let pickedCard = Math.floor(Math.random() * 52)
            let pickedSuit = Math.floor(pickedCard / 13)

            return { 
                suit: this.suits[pickedSuit], //这里的this指向deck对象
                card: pickedCard % 13 
            }
        }
    }
}

let cardPicker2 = deck2.createCardPicker()
let pickedCard2 = cardPicker2(); 
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit)