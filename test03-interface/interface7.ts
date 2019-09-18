//---------类实现接口----------
// 1. 类里实现属性
interface ClockInterface {
  currentTime: Date
}

class Clock implements ClockInterface {
  currentTime!: Date //这里用 ！修饰符 来规避错误
  constructor(h: number, m: number) { }
}



