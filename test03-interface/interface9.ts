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



