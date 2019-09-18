//--------高级技巧1---------------
// 巧用 构造函数 
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