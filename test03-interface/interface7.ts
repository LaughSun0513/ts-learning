//---------类实现接口----------
// 1. 类里实现属性
interface ClockInterface {
  currentTime: Date
}

class Clock implements ClockInterface {
  currentTime: Date
  constructor(h: number, m: number) { }
}

//-----------2.添加实例方法，在类里实现---------------
interface ClockInterface2 {
  currentTime2: Date
  setTime(d: Date):any
}

class Clock2 implements ClockInterface {
  currentTime2: Date
  setTime(d: Date) {
    this.currentTime2 = d
  }
  constructor(h: number, m: number) { }
}

//------------3.类  静态部分与实例部分的区别---------------
// constructor 存在于类的静态部分，所以不在检查的范围内

//ClockConstructor 为构造函数所用
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
      console.log('beep')
    }
}

function createClock(ctor:ClockConstructor,hour:number,minute:number):ClockInterface3{
  return new ctor(hour,minute);
}
let digital = createClock(DigitalClock, 12, 17);
//会检查 AnalogClock 是否符合构造函数签名
let analog = createClock(AnalogClock, 7, 32);

//------------4.继承接口-----------------
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

//--------------4.2 继承多个接口----------------------
interface Person {
  age:number
}
interface Sex {
  sex:string
}
interface Man extends Person,Sex { //继承多个接口 --> 合成接口
  strength:string
}
let createMan = {} as Man
createMan.age = 25;
createMan.sex = 'boy';
createMan.strength = "big";

//-----------------5. 混合类型-------------------------
interface Counter {
    (start:number):string
    interval:number
    reset():void
}
function getCounter():Counter {
  //一个对象可以同时做为函数和对象使用，并带有额外的属性
  let counter = function(start:number){} as Counter;
  counter.interval = 200;
  counter.reset = function(){}
  return counter;
};
let myCounter = getCounter();
myCounter(10);
myCounter.reset();
myCounter.interval = 300;

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

