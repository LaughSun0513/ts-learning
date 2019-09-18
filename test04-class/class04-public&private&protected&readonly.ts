//----------4 公共修饰符public / 私有修饰符 private / 受保护的修饰符protected / readonly ----------

//----  公共修饰符public ----
//成员都默认为 public
//也可以显示定义
class Animal4 {
  public name:string
  public constructor(name:string) {
    this.name = name
  }
  public move(distance:number){
   console.log(`${this.name} moved ${distance}m`)
  }
}

//---- 私有修饰符 private ----
// 1 私有属性无法被外部访问
class Animal5 {
  private name:string
  constructor(name:string){
    this.name = name
  }
}
// new Animal5('Cat').name; //name是私有的，无法在外部访问

//2 私有属性只有继承的派生类可以使用 非派生类无法使用
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

//---- 受保护的修饰符protected ----
// 1 受保护的属性只能在派生类中使用，但是不能在外部访问
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


// ---- 构造函数也可以被标记成 protected -------
// 2 受保护的构造函数只能在派生类中使用，但是不能在外部实例化new
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

// ---- readonly -------
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
