//-------类的继承-----------
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
    move(distance:number = 5 ){  //重写了move方法
      console.log("snake move");
      super.move(distance)
    }
}

class Horse extends Animal2 {
  constructor(name:string){
    super(name)
  }
  move(distance:number = 45 ){ //重写了move方法
    console.log("Horse move");
    super.move(distance)
  }
}
let snake1 = new Snake('ssss');
let horse1:Animal2 = new Horse('yuyuyu');
snake1.move();
horse1.move();
