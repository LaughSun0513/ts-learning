//-----------抽象类------------------------
//abstract 关键字 定义抽象类 定义抽象类内部抽象方法
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
