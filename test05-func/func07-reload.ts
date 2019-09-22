//--------函数重载-----------
//场景：函数根据传入不同的参数返回不同类型的数据
//重载的 函数在调用的时候会进行正确的类型检查
let suits = ['hearts', 'spades', 'clubs', 'diamonds']

//重载函数，先根据参数类型定义
function pickCard(x: {suit: string; card: number }[]): number 
function pickCard(x: number): {suit: string; card: number }

function pickCard(x): any {
  if (Array.isArray(x)) {
    let pickedCard = Math.floor(Math.random() * x.length)
    return pickedCard 
  } else if (typeof x === 'number') {
    let pickedSuit = Math.floor(x / 13)
    return { suit: suits[pickedSuit], card: x % 13 }
  }
}

let myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 }
]
let pickedCard1 = myDeck[pickCard(myDeck)]; //参数是数组 返回对象
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit)

let pickedCard2 = pickCard(15) //参数是数字 返回数字
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit)