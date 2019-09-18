//-------2 类的继承-----------
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

