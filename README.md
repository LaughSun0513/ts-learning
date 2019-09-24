# TS的 安装 编译 vscode自动编译
```
npm i typescript -g
tsc index.ts

# vscode 
tsc --init       // 生成tsconfig.json
"outDir": "./js" // 修改outDir路径
vscode终端 --> 运行任务 ---> tsc:监视
```

# ts中的数据类型
- 布尔类型(Boolean)
- 数字类型(Number)
- 字符串(String)

- 数组类型(Array)
- 元组类型(Tuple)
- 枚举类型(Enum)
- 任意类型(Any)

- void类型
- null / undefined
- never类型
- object
- 类型断言

# ts中的接口 -- interface
## !! 1.可以指定数据结构
```Ts
interface LabelledValue {
  label:string
}
function printLabel2(labelObj:LabelledValue):void{
  console.log(labelObj.label)
}
```

## !! 2.可以对可能存在的属性进行预定义，捕获不存在的属性
```Ts
interface Square {
  color:string,
  area:number
}
let config:Square = {
  color:'red',
  area:1,
  clor:2 //error 捕获不存在的属性
}
```

## 3.只读属性 & 只读数组泛型
```Ts
//只读属性
interface Point {
  readonly x:number,
  readonly y:number
}

//只读数组泛型
let list:number[]=[1,2,3,4];
let listArray:ReadonlyArray<number> = list;
list = listArray as number[]; //可以通过类型断言改写
```

## 4.额外属性检查如何跳过
### 方法一 as
```Ts

interface SquareConfig {
  color: string;
  width: number;
}
let mySquare:SquareConfig = { colour: 'red', width: 100 } as SquareConfig; //colour拼写错误，可以通过as跳过
```
### 方法二 修改索引签名
```Ts
interface SquareConfig {
  color: string
  width: number
  [propName:string]:any //表示可以有任意数量的属性，并且只要它们不是 color 和 width
}
let mySquare:SquareConfig = { colour: 'red', width: 100 }; //colour拼写错误，修改了索引签名，可以理解为新增的属性
```
### 方法三 赋值给新对象 不会经过额外检查
```Ts
interface SquareConfig {
  color: string
  width: number
}
let newObj = {
  colour: 'red', 
  width: 200
}
let mySquare: SquareConfig = newObj
```

## !!5.函数类型的接口
```Ts
interface myFunc {
  (string:string,subString:string):boolean
}
//使用
let createFunc:myFunc
createFunc = function(string:string,subString:string):boolean{
    let result = string.search(subString); //'abc'.search('d') -> -1
    return result > -1
}

//---可以改参数名字-----
let createFunc2:myFunc
createFunc2 = function(str:string,sub:string):boolean{
    let result = str.search(sub);
    return result > -1
}

//----可以省略类型判断，自己会类型判断------
let createFunc3:myFunc
createFunc3 = function(str,sub){
  let result = str.search(sub);
  return result > -1
}
```

## 6.可索引类型
### 字符串索引 obj["key"]
```TS
interface NumberDic {
  [index:string]:number
}
```

### 数字索引 obj[0]
```TS
interface StringArray {
   [index:number]:string
}
```

### 设置为只读索引
```TS
interface ReadonlyStringArray {
  readonly [index:number]:string
}
```

## 类实现接口
```TS
interface ClockInterface {
  currentTime: Date
}

class Clock implements ClockInterface {
  currentTime!: Date //这里用 ！修饰符 来规避错误
  constructor(h: number, m: number) { }
}
```

### 添加接口方法，类实现方法
```TS
interface ClockInterface2 {
  currentTime2: Date
  setTime(d: Date):any
}

class Clock2 implements ClockInterface2 {
  currentTime2!: Date //这里用 ！修饰符 来规避错误
  setTime(d: Date) {
    this.currentTime2 = d
  }
  constructor(h: number, m: number) { }
}
```

### 类的静态部分和实例部分
```TS
interface ClockConstructor {
  new (hour:number,minute:number) : ClockInterface3
}

// ClockInterface 为实例方法所用
interface ClockInterface3 {
  tick():void
}
class DigitalClock implements ClockInterface3 {
   constructor(h:number,m:number){}
    tick(){
      console.log('beep')
    }
}
class AnalogClock implements ClockInterface3 {
    constructor(h:number,m:number){}
    tick(){
      console.log('yoyoyo')
    }
}

//第一个参数会去检查整个类的静态部分
function createClock(ctor:ClockConstructor,hour:number,minute:number):ClockInterface3{
  return new ctor(hour,minute);
}
let digital = createClock(DigitalClock, 12, 17);
//会检查 AnalogClock 是否符合构造函数签名
let analog = createClock(AnalogClock, 7, 32);
```

## 继承接口 & 使用合成接口
```TS
interface Shape {
  color:string
}
interface Square2 extends Shape { //接口继承
  sLength:number
}
let mySquare2 = {} as Square2;
//同时拥有color sideLength俩属性
mySquare2.color = "blue";
mySquare2.sLength = 10;
```
```TS
//使用合成接口
interface Person {
  age:number
}
interface Sex {
  sex:string
}
interface Man extends Person,Sex { //继承多个接口 --> 合成接口
  strength:string
}
let createMan = {} as Man //使用合成接口
createMan.age = 25;
createMan.sex = 'boy';
createMan.strength = "big";
```

## 混合类型
```TS
interface Counter {
    (start:number):string
    interval:number
    reset():void
}
function getCounter():Counter {
  //一个对象可以同时做为函数和对象使用，并带有额外的属性
  let counter = function(start:number){} as Counter; //既是函数也是对象
  counter.interval = 200;
  counter.reset = function(){}
  return counter;
};
let myCounter = getCounter();
myCounter(10);
myCounter.reset();
myCounter.interval = 300;
```

## 接口继承类
```TS
//-------------------6. 接口继承类---------------------------------
class Control {
  private state:any
}
//当接口继承了一个类类型时，它会继承类的成员但不包括其实现
//接口声明了所有类中存在的成员，但并没有提供具体实现一样
//接口同样会继承到类的 private 和 protected 成员
//这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现
interface SelectableControl extends Control { //SelectableControl 包含了 Control 的所有成员，包括私有成员 state
  select():void
}

//子类，可实现接口实现
class Button extends Control implements SelectableControl { //Button是Control的子类，可以实现
    select(){}
}
//子类，可实现接口实现
class Textbox extends Control {
    select(){}
}

//并非Control子类，没法实现接口
/*
class ImgaeC implements SelectableControl {
    select(){}
}
*/
```

# 类
### 类的实现
```TS
class Greeter {
  greeting:string
  constructor(message:string){
    this.greeting = message
  }
  greet(){
    return 'Hello' + this.greeting
  }
}
let greeter = new Greeter('world');
```

### 派生类
```TS
class Animal { //基类/ 超类
  move(distance:number = 0){
    console.log(`Animal moved ${distance}m`)
  }
}
class Dog extends Animal { //派生类 / 子类
  bark(){
    console.log('Wang!Wang!')
  }
}
const dog = new Dog();
dog.bark();
dog.move(10);
```

### super继承属性和方法
```TS
class Animal2 { // 基类/超类
  name:string
  constructor(name:string){
    this.name = name;
  }
  move(distance:number = 0){
    console.log(`${this.name} moved ${distance}m`)
  }
}

class Snake extends Animal2 {
    constructor(name:string){ //派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数
      super(name)
    }
    move(distance:number = 5 ){  
      console.log("snake move");
      super.move(distance);//重写了move方法
    }
}
```

### 公共修饰符public 
```TS
class Animal4 {
  public name:string
  public constructor(name:string) {
    this.name = name
  }
  public move(distance:number){
   console.log(`${this.name} moved ${distance}m`)
  }
}
```
### 私有修饰符 private 
```TS
class Animal5 {
  private name:string
  constructor(name:string){
    this.name = name
  }
}
// new Animal5('Cat').name; //name是私有的，无法在外部访问
```
```TS
//私有属性只有继承的派生类可以使用 非派生类无法使用
class Dogs extends Animal5 { // Dogs继承Animal5，可以共有name属性
   constructor(){
     super(name);
     console.log('wangwang')
   }
}
class Person {
   private name:string
   constructor(name:string){
    this.name = name
  }
}
let animal = new Animal5('xiaohuang'); // Dogs继承Animal5，可以共有name属性
let oneDog = new Dogs();
let onePerson = new Person('xiaoming');
animal = oneDog; //派生类Dogs 可以和 Animal5 互相兼容
// animal = onePerson; // Error: Person有自己的私有属性，和Animal5相互冲突，互相不兼容
```
### 受保护的修饰符protected 
```TS
//受保护的属性只能在派生类中使用，但是不能在外部访问
class Person2 {
  protected name:string
  constructor(name:string){
   this.name = name
 }
}
class Teacher extends Person2 {
  private department : string
  constructor(name:string,department:string){
    super(name)
    this.department = department
  }
  getJob(){
    return `My name is ${this.name} and I work in ${this.department}`; //这里可以访问name
  }
}
let oneTeach = new Teacher('Ms Li','middle school');
console.log(oneTeach.getJob());
// console.log(oneTeach.name); Error name属性可以在派生类Teacher中使用，但是不能在外部访问
```

```TS
//受保护的构造函数只能在派生类中使用，但是不能在外部实例化new
class Person3 {
  protected name:string
  protected constructor(name:string){ //这个类不能在包含它的类外被实例化，但是能被继承
   this.name = name
 }
}
class Teacher2 extends Person2 {
  private department : string
  constructor(name:string,department:string){
    super(name)
    this.department = department
  }
  public getJob(){
    return `My name is ${this.name} and I work in ${this.department}`;
  }
}
let twoTeach = new Teacher('Ms Zhang','middle school');
// let john = new Person3('John'); //Error : 'Person' 的构造函数是被保护的,只能继承，没法实例化
```
### readonly
```TS
class Person4 {
  readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

let john = new Person4('John')
//john.name = 'peter' //name 只读

class Person5 {
  constructor(readonly name: string) { //构造函数内直接使用
  }
}
```

### 存取器getter/setter
```TS
//首先，存取器要求你将编译器设置为输出 ECMAScript 5 或更高。 不支持降级到 ECMAScript 3
//其次，只带有 get 不带有 set 的存取器自动被推断为 readonly
let passcode = 'secret passcode'

class Employee {
  constructor(private _fullName: string){}

  get fullName(): string { //2 接下去执行get操作 返回结果
    return this._fullName
  }

  set fullName(newName: string) {
    if (passcode && passcode == 'secret passcode') { 
      this._fullName = newName
    }
    else { //1如果密码错误 会走这  
      console.log('Error: Unauthorized update of employee!')
    }
  }
}

let employee = new Employee('AAAA')
employee.fullName = 'Bob Smith'
if (employee.fullName) {
  console.log(employee.fullName)
}
```

### 类的静态属性 static
```TS
//如同在实例属性上使用 this.xxx 来访问属性一样
class Grid {
  static origin = {x: 0, y: 0} //类的静态属性

  scale: number

  constructor (scale: number) {
    this.scale = scale
  }

  calculateDistanceFromOrigin(point: {x: number; y: number}) {
    let xDist = point.x - Grid.origin.x //使用类的静态属性
    let yDist = point.y - Grid.origin.y
    return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
  }
}

let grid1 = new Grid(1.0)  // 1x scale
let grid2 = new Grid(5.0)  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 3, y: 4}))
console.log(grid2.calculateDistanceFromOrigin({x: 3, y: 4}))
```

### !!抽象类 -- abstract
```TS
abstract class Mobile {  
    name:string
    constructor(name:string){
      this.name = name
    }
    printName(){
      console.log('name is' + this.name);
    }
    abstract printSize():void; // 必须在派生类中实现
}

class Apple extends Mobile {
  constructor(){
    super('iphone 11');
  }
  printSize():void{
    console.log('64G');
  }
  printMoney():void{
    console.log('5488');
  }
}
let redIphone11:Mobile //允许创建一个对抽象类型的引用
// redIphone11 = new Mobile(); //错误: 不能创建一个抽象类的实例
redIphone11 = new Apple();//允许对一个抽象子类进行实例化和赋值
redIphone11.printName();
redIphone11.printSize();
//redIphone11.printMoney();// 错误: 方法在声明的抽象类中不存在
```

### 高级技巧1--巧用构造函数
```TS
class Greeter2 {
  static standardGreeting = 'Hello, there'
  
  greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    if (this.greeting) {
      return 'Hello, ' + this.greeting
    } else {
      return Greeter2.standardGreeting
    }
  }
}

let greeter2: Greeter2
greeter2 = new Greeter2('aaaaa')
console.log(greeter2.greet())

let greeterMaker: typeof Greeter2 = Greeter2; //!!! 告诉我 Greeter 标识符的类型 也就是构造函数的类型 这个类型包含了类的所有静态成员和构造函数
greeterMaker.standardGreeting = 'Hey there' //可以修改静态方法

let greeter3: Greeter = new greeterMaker('bbbbbbb')
console.log(greeter2.greet())
```

### 高级技巧2--把类当做接口使用
```TS
//类定义会创建两个东西：类的实例类型和一个构造函数
class Point {
  x?: number
  y?: number
}
//因为类可以创建出类型，能够在允许使用接口的地方使用类
interface Point3d extends Point {
  z: number
}

let point3d: Point3d = {x: 1, y: 2, z: 3}
```

# 函数
### 为函数定义类型
```TS
//函数类型包含两部分：参数类型和返回值类型
function add(x: number, y: number): number {
  return x + y
}

let myAdd = function(x: number, y: number): number { 
  return x + y
}
```
```TS
//书写完整函数类型
//对于返回值，我们在函数和返回值类型之前使用(=>)符号，使之清晰明了
//如果函数没有返回任何值，你也必须指定返回值类型为 void 而不能留空

let myAdd2 : (x: number, y: number) => number = 
function(x: number, y: number): number{
  return x+y
}

//推断类型
let myAdd3: (baseValue: number, increment: number) => number = 
function(x, y) { //x,y 按上下文归类 是类型推论的一种
  return x + y
}
```

### 可选参数和默认参数
```TS
//---------------1 参数过少或过多情况-----------------------------------
function buildName(firstName: string, lastName: string) {
  return firstName + ' ' + lastName;
}

//let result1 = buildName('Bob')                  // Error, 参数过少
//let result2 = buildName('Bob', 'Adams', 'Sr.');  // Error, 参数过多
let result3 = buildName('Bob', 'Adams');         // OK
```
```TS
//-----------------2 使用 ? 实现可选参数的功能-----------------------------
function buildName2(firstName: string, lastName?: string): string {
  if (lastName)
    return firstName + ' ' + lastName
  else
    return firstName
}

let result4 = buildName2('Bob');  // 现在正常了
//let result5 = buildName2('Bob', 'Adams', 'Sr.')  // Error, 参数过多
let result6 = buildName2('Bob', 'Adams')  // OK
```
```TS
//------------------3 有默认初始化值的参数----------------------------

function buildName3(firstName: string, lastName = 'Smith'): string {
  return firstName + ' ' + lastName
}

let result7 = buildName3('Bob')                  // 返回 "Bob Smith"
let result8 = buildName3('Bob', undefined)     // 正常, 同样 "Bob Smith"
//let result9 = buildName3('Bob', 'Adams', 'Sr.')  // 错误, 参数过多
let result10 = buildName3('Bob', 'Adams')        // OK
```
```TS
//------------------4 带默认值的参数不需要放在必须参数的后面----------------------------
function buildName4(firstName = 'Will', lastName: string): string {
  return firstName + ' ' + lastName
}

//let result11 = buildName4('Bob')                  // Error, 参数过少
//let result12 = buildName4('Bob', 'Adams', "Sr.")  // Error, 参数过多
let result13 = buildName4('Bob', 'Adams')         // OK， 返回 "Bob Adams"
let result14 = buildName4(undefined, 'Adams')     // OK，  返回 "Will Adams"
```

### 剩余参数
```TS
//可以把所有参数收集到一个变量
//剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个
function buildName(firstName: string, ...restOfName: string[]): string { //...restOfName: string[]
  return firstName + ' ' + restOfName.join(' ')
}

let employeeName = buildName('Joseph', 'Samuel', 'Lucas', 'MacKinzie')
```
```TS
//---------------会在带有剩余参数的函数类型定义上使用到-----------------------
function buildName2(firstName: string, ...restOfName: string[]): string {
  return firstName + ' ' + restOfName.join(' ')
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName2
```

### this
#### 箭头函数
```JS
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
```
```TS
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
```
#### 显示定义this参数
```TS
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
```

#### this在回调函数中
```TS
//当你将一个函数传递到某个库函数里稍后会被调用时。 因为当回调被调用的时候，它们会被当成一个普通函数调用，this 将为 undefined
//模拟场景:某个库需要调用某个实例的回调
interface UIElement {
    //this: void 意味着 addClickListener 期望传入的 onclick 方法不需要 this
    addClickListener(onclick: (this: void, e: Event) => void): void
}
class Handler {
    type: string
    /*
    onClickBad(this:Handler,e:Event){ //这里的this指向了Handler，导致UIElement的this出现问题
        this.type = e.type
    }
    */
    /*
    onClickBad(this:void,e:Event){ //这里的this指向了void，解决了UIElement的this问题，但是无法调用Handler自己的type属性
        this.type = e.type
    }
    */
    onClickBad = (e: Event) => { //使用箭头函数解决
        this.type = e.type
    }
}

let h = new Handler();
let uiEle: UIElement = {
    addClickListener() { }
}
uiEle.addClickListener(h.onClickBad);
```

### 函数重载
```TS
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
```

# 泛型
### 概念
```TS
//缺点：限制了类型只能是数字
function echo(arg: number): number {
    return arg
}
//缺点：传入的类型与返回的类型应该本来应该是相同，但由于是any，导致可以传数字，可以返回字符串
function echo2(arg: any): any {
    return arg
}

//需要泛型----返回值的类型与传入参数的类型是相同的
//缺点：必须把这些参数当做是任意或所有类型
function genericEcho<T>(args:T) : T {
        return args;
}
//使用泛型函数
genericEcho<string>('String');
genericEcho('String'); //利用了类型推断，无需加<string>
```

### 泛型变量
```TS
function genericEcho3<T>(args:T[]) : T[] { //这里使用了T[] 否则args是没有length属性
    console.log(args.length)
    return args;
}
//泛型函数genericEcho 接收类型参数 T 和参数 arg
//它是个元素类型是 T 的数组，并返回元素类型是T 的数组
//genericEcho3(1)
//genericEcho3('1')
genericEcho3([1,2,3,4])
genericEcho3(['1','2','3','4'])
```

### 泛型类型 -- 函数本身的类型
```TS
//---------函数本身的类型--------
function gengericEcho2<T>(args: T): T {
    return args;
}
//泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样
let myGenericEcho: <T>(args: T) => T = gengericEcho2;

//也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以
let myGenericEcho2: <U>(args: U) => U = gengericEcho2;

//还可以使用带有调用签名的对象字面量来定义泛型函数
let myGenericEcho3: {<T>(args: T):T}  = gengericEcho2; //这里是:T 不是=>T
```

### 泛型类型 -- 泛型接口
```TS
interface gengericEchoFn {
    <T>(args: T): T //<T>
}
function gengericEcho<T>(args: T): T {
    return args;
}

let myGengericEcho:gengericEchoFn = gengericEcho;
```
```TS
//把泛型参数当作整个接口的一个参数
interface gengericEchoFn2<T> { //<T>
    (args: T): T
}
function gengericEcho2<T>(args: T): T {
    return args;
}
//不再描述泛型函数，而是把非泛型函数签名作为泛型类型一部分 
//传入类型参数来指定泛型类型<number>  锁定了之后代码里使用的类型
let myGengericEcho2:gengericEchoFn2<number> = gengericEcho2; 
```

### 泛型类
```TS
//泛型类看上去与泛型接口差不多。 泛型类使用（<>）括起泛型类型，跟在类名后面
class GenericNum<T>{
    zeroValue: T
    add: (x: T, y: T) => T
}

let myGenericNum = new GenericNum<number>();
myGenericNum.zeroValue = 0;
myGenericNum.add = function (x, y) {
    return x + y
}
//GenericNum类没有什么去限制它只能使用 number 类型。 也可以使用字符串或其它更复杂的类型
//类有两部分：静态部分和实例部分 泛型类指的是实例部分的类型
let myGenericStr = new GenericNum<string>();
myGenericStr.zeroValue = '';
myGenericStr.add = function (x, y) {
    return x + y
}
```

### 泛型约束
```TS
//相比于操作 any 所有类型，我们想要限制函数去处理任意带有 .length 属性的所有类型。 
//只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。为此，我们需要列出对于 T 的约束要求。

//我们定义一个接口来描述约束条件，创建一个包含 .length 属性的接口，使用这个接口和 extends 关键字来实现约束
interface Lengthwise {
    length: number
}
 //<T extends Lengthwise> 
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length) // OK
    return arg
}
//loggingIdentity(3);  // Error
loggingIdentity({
    length: 10, 
    value: 3
})
```

### 在泛型约束中使用类型参数
```TS
//可以声明一个类型参数，且它被另一个类型参数所约束
//比如，现在我们想要用属性名从对象里获取这个属性。 并且我们想要确保这个属性存在于对象 obj 上，因此我们需要在这两个类型之间使用约束
//<K extends keyof T> K必须是T中的key
function getProperty<T,K extends keyof T>(obj:T,key:K){
    return obj[key]
}
let obj = {
    a:1,
    b:2
}
getProperty(obj,'a');
//getProperty(obj,'c'); //error
```

# 类型推断
### 最佳通用类型
```TS

class Animal {
    numLegs: number
}

class Bee extends Animal {
}

class Lion extends Animal {
}

let zoo = [new Bee(), new Lion()];//这里默认类型推断的结果为联合数组类型，(Bee | Lion)[]

//这里，我们想让 zoo 被推断为 Animal[] 类型，但是这个数组里没有对象是 Animal 类型的，因此不能推断出这个结果。 
//为了更正，我们可以明确的声明我们期望的类型
let zoo2:Animal[] = [new Bee(), new Lion()];
```

### 上下文类型
```TS
window.onmousedown = function(mouseEvent) {
    //TypeScript 类型检查器使用 window.onmousedown 函数的类型来推断右边函数表达式的类型。 
    //因此，就能推断出 mouseEvent 参数的类型了，所以 mouseEvent 访问了一个不存在的属性，就报错了
    //console.log(mouseEvent.clickTime)  // Error
}

//如果上下文类型表达式包含了明确的类型信息，上下文的类型被忽略。重写上面的例子
//这个函数表达式有明确的参数类型注解，上下文类型被忽略
//上下文类型会在很多情况下使用到。通常包含函数的参数，赋值表达式的右边，类型断言，对象成员，数组字面量和返回值语句
window.onmousedown = function(mouseEvent:any) { //使用any忽略上下文类型
    console.log(mouseEvent.clickTime)  // OK
}
```
```TS
//上下文类型也会做为最佳通用类型的候选类型
class Animal {
    numLegs: number
}

class Bee extends Animal {
}

class Lion extends Animal {
}
function createZoo(): Animal[] { // Animal[]
    return [new Bee(), new Lion()]
}
  
let zoo3 = createZoo()
```

# 高级类型
### 交叉类型
```TS
//交叉类型是将多个类型合并为一个类型
//可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性
function extend<T, U>(first: T, second: U): T & U { //T & U
    let newObj = {} as T & U;
    for (let id in first) {
        newObj[id] = first[id] as any
    }
    for (let id in second){
        if (!newObj.hasOwnProperty(id)) {
            newObj[id] = second[id] as any
        }
    }
    return newObj;
}
class Person {
    constructor(public name: string) { }
}
interface Logger {
    log(): void
}
class ConsoleLog implements Logger {
    log() { }
}
let a = new Person('xiaoming');
let b = new ConsoleLog();
let c = extend(a, b); // 让c同时拥有name和log
c.name;
c.log();
```
### 联合类型
```TS
function padLeft(value: string, padding: any) { //这里的padding为any
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    }
    if (typeof padding === 'string') {
        return padding + value
    }
    throw new Error(`Expected string or number, got '${padding}'.`)
}

padLeft('Hello world', 4) // returns "    Hello world"
let indentedString = padLeft('Hello world', true); //编译阶段通过，运行时报错

//为了解决该问题--------引出联合类型
//联合类型表示一个值可以是几种类型之一。我们用竖线（|）分隔每个类型
function padLeft2(value: string, padding: string | number) { //这里的padding为string|number 联合类型
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    }
    if (typeof padding === 'string') {
        return padding + value
    }
    throw new Error(`Expected string or number, got '${padding}'.`)
}
//let indentedString2 = padLeft2('Hello world', true);  会检测出这里true的问题
```
### 类型保护
```TS
//如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员
interface Bird {
    fly()
    layEggs()
}

interface Fish {
    swim()
    layEggs()
}

function getSmallPet(): Fish | Bird {
    return
}

let pet = getSmallPet()
pet.layEggs() // okay
//pet.swim()    // error


//-------------类型保护----------------------
//方式1:为了让其运行，可以使用类型断言(type assertion)
if ((pet as Fish).swim) {
    (pet as Fish).swim()
} else {
    (pet as Bird).fly()
}

//方式2:用户自定义的类型保护(User-Defined Type Guards) 写一个函数判断类型 
// 使用到类型谓词 谓词为 parameterName is Type 这种形式， parameterName 必须是来自于当前函数签名里的一个参数名
function isFish(pet: Fish | Bird): pet is Fish { //使用到类型谓词pet is Fish 
    return (pet as Fish).swim !== undefined;
}
if (isFish(pet)) {
    pet.swim()
} else {
    pet.fly()
}

//方式3:使用in
function move(){
    if("swim" in pet){
       return pet.swim();
    }
    return pet.fly();
}
move()
```
### typeof 类型保护
```TS
//类型断言的方式 不好
function isNumber(x: any): x is string {
    return typeof x === 'number'
}

function isString(x: any): x is string {
    return typeof x === 'string'
}

function padLeft(value: string, padding: string | number) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(' ') + value
    }
    if (isString(padding)) {
        return padding + value
    }
    throw new Error(`Expected string or number, got '${padding}'.`)
}

//----------typeof 类型保护------------------
//typeof 类型保护只有两种形式能被识别：typeof v === "typename" 和 typeof v !== "typename"， 
//"typename"必须是 "number"， "string"，"boolean" 或 "symbol"
function padLeft2(value: string, padding: string | number) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    }
    if (typeof padding === 'string') {
        return padding + value
    }
    throw new Error(`Expected string or number, got '${padding}'.`)
}
```
### instanceof 类型保护
```TS
class Bird {
    fly() {
        console.log('bird fly')
    }

    layEggs() {
        console.log('bird lay eggs')
    }
}

class Fish {
    swim() {
        console.log('fish swim')
    }

    layEggs() {
        console.log('fish lay eggs')
    }
}

function getRandomPet() {
    return Math.random() > 0.5 ? new Bird() : new Fish()
}

let pet2 = getRandomPet()
//instanceof 类型保护是通过构造函数来细化类型的一种方式
if (pet2 instanceof Bird) {
    pet2.fly()
}
if (pet2 instanceof Fish) {
    pet2.swim()
}
```

### 可以为 null 的类型
```TS
//默认情况下，类型检查器认为 null 与 undefined 可以赋值给任何类型
//null 与 undefined 是所有其它类型的一个有效值
//--strictNullChecks 标记可以解决此错误：当你声明一个变量时，它不会自动地包含 null 或 undefined

//可以使用联合类型明确的包含它们
let s = 'foo'
s = null // 错误, 'null'不能赋值给'string'
let sn: string | null = 'bar'
sn = null // 可以

sn = undefined // error, 'undefined'不能赋值给'string | null'
```

### 可选参数和可选属性
```TS
//-----------可选参数-------------------------
//使用了 --strictNullChecks，可选参数会被自动地加上 | undefined
function test(x: number, y?: number) {
    return x + (y || 0)
}
test(1,2);
test(1);
test(1,undefined);
test(1,null);// error, 'null' 不能赋值给 'number | undefined'
```
```TS
//-----------可选属性-------------------------
class C {
    a:number
    b?:number
}
let c1 = new C();
c1.a =12;
c1.a = undefined; //error, 'undefined' 不能赋值给 'number'

c1.b=13
c1.b=undefined;//ok
c1.b=null;// error, 'null' 不能赋值给 'number | undefined'
```

### 类型保护和类型断言
```TS
//由于可以为 null 的类型能和其它类型定义为联合类型，那么你需要使用类型保护来去除 null
function f(sn: string | null): string {
    if (sn === null) {
        return 'default'
    } else {
        return sn
    }
}
//使用短路运算符
function f2(sn: string | null): string {
    return sn || 'default'
}
```
```TS
//-----------类型断言去除null---------------
function broken(name: string | null): string {
    function postfix(epithet: string) {
        //编译器无法去除嵌套函数的 null（除非是立即调用的函数表达式）
        //因为它无法跟踪所有对嵌套函数的调用，尤其是你将内层函数做为外层函数的返回值。
        //如果无法知道函数在哪里被调用，就无法知道调用时 name 的类型
        return name.charAt(0) + '.  the ' + epithet // error, 'name' 可能为 null
    }
    name = name || 'Bob'
    return postfix('great')
}

function fixed(name: string | null): string {
    function postfix(epithet: string) {
        return name!.charAt(0) + '.  the ' + epithet // ok 这里使用了! 后缀
    }
    name = name || 'Bob'
    return postfix('great')
}

broken(null)
```

### 字符串字面量类型
```TS
//字符串字面量类型允许你指定字符串必须具有的确切值
//在实际应用中，字符串字面量类型可以与联合类型，类型保护很好的配合。通过结合使用这些特性，你可以实现类似枚举类型的字符串

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

class UIEle {
    animate(dx:number,dy:number,easing:Easing){
        if(easing==="ease-in"){

        }else if (easing==="ease-out") {
            
        }else if(easing==="ease-in-out"){

        }else{

        }
    }
}
let newEle = new UIEle();
newEle.animate(0,0,'ease-in');
//newEle.animate(0,0,'unease');
```











