//-----------2.添加实例方法，在类里实现---------------
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



